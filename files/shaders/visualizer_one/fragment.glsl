#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_audioData;
const float PI=3.1415926535897932384626433832795;

varying vec2 vUv;

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution.xy;
    st.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    
    float audioValue=texture2D(u_audioData,vUv).r;
    
    float dist=distance(st,vec2(.5));
    color=vec3(audioValue);
    color*=vec3(sin(u_time+dist*10.+audioValue*10.));
    
    gl_FragColor=vec4(color,1.);
}