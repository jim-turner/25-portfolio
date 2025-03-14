document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('visualizerCanvas');
    const startButton = document.getElementById('startButton');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.z = 5;

    let audioContext;
    let analyser;
    let audioSource;
    let audioDataArray;
    let bufferLength;
    let material;
    let mesh;
    let audioTexture;

    function initAudio() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        bufferLength = analyser.frequencyBinCount;
        audioDataArray = new Uint8Array(bufferLength);

        // Dummy audio -  REPLACE THIS WITH AUDIO CAPTURE WHEN POSSIBLE
        const bufferSize = 2 * audioContext.sampleRate; // 2 seconds of noise
        const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        audioSource = audioContext.createBufferSource();
        audioSource.buffer = noiseBuffer;
        audioSource.loop = true;
        audioSource.connect(analyser);
        audioSource.start();

        console.log("Using dummy audio");
    }

    function initShaders() {
        Promise.all([
            fetch('vertex.glsl').then(res => res.text()),
            fetch('fragment.glsl').then(res => res.text())
        ]).then(([vertexShader, fragmentShader]) => {
            console.log("Shaders loaded");

            audioTexture = new THREE.DataTexture(
                audioDataArray,
                bufferLength,
                1,
                THREE.LuminanceFormat,
                THREE.UnsignedByteType
            );
            audioTexture.needsUpdate = true;
            console.log("Texture created");

            material = new THREE.ShaderMaterial({
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                uniforms: {
                    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                    u_time: { value: 0.0 },
                    u_audioData: { value: audioTexture }
                }
            });
            console.log("Shader material created");

            const geometry = new THREE.PlaneGeometry(5, 5);
            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            console.log("Mesh added to scene");

            animate();
        }).catch(err => {
            console.error("Error loading shaders:", err);
        });
    }

    function animate() {
        requestAnimationFrame(animate);

        if (analyser) {
            analyser.getByteFrequencyData(audioDataArray);
            audioTexture.image.data = audioDataArray;
            audioTexture.needsUpdate = true;
        }

        material.uniforms.u_time.value += 0.01;
        renderer.render(scene, camera);
    }

    startButton.addEventListener('click', () => {
        // Remove the "getDisplayMedia" call completely and use dummy audio
        initAudio();
        initShaders();
    });
});