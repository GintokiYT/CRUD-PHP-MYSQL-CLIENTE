const $ = selector => document.querySelector(selector);

const theme = $(".theme");
const button = $(".button");

button.addEventListener("click", () => {
  if(theme.classList.contains("light")) {
    theme.classList.add("dark");
    theme.classList.remove("light");
    button.style.transform = "translateX(55px)";
    button.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
    <g>
      <g>
        <path d="m275.4,500.7c-135,0-244.7-109.8-244.7-244.7 1.06581e-14-134.9 109.8-244.7 244.7-244.7 8.2,0 16.4,0.4 24.6,1.2 7.2,0.7 13.5,5.2 16.5,11.7s2.4,14.2-1.6,20.2c-23,33.8-35.2,73.3-35.2,114.2 0,105 78.7,192.2 183.2,202.6 7.2,0.7 13.5,5.2 16.5,11.7 3.1,6.5 2.4,14.2-1.6,20.2-45.8,67.4-121.4,107.6-202.4,107.6zm-12.5-448c-106.5,6.5-191.2,95.2-191.2,203.3 1.42109e-14,112.3 91.4,203.7 203.7,203.7 56.4,0 109.6-23.4 147.8-63.7-46.2-11.7-88.1-36.8-120.8-72.6-41.1-45.2-63.8-103.6-63.8-164.6 0.1-37.1 8.4-73.2 24.3-106.1z"/>
      </g>
    </g>
  </svg>`;
  } else {
    theme.classList.add("light");
    theme.classList.remove("dark");
    button.style.transform = "translateX(5px)";
    button.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 612.001 612.001" style="enable-background:new 0 0 612.001 612.001;" xml:space="preserve">
 <g>
   <g>
     <path d="M306,149.341c-86.382,0-156.661,70.278-156.661,156.661c0,86.382,70.278,156.66,156.661,156.66
       s156.66-70.278,156.66-156.66C462.66,219.618,392.382,149.341,306,149.341z"/>
     <path d="M274.194,117.278h63.612c5.032,0,9.356-2.101,11.863-5.763c2.508-3.662,2.9-8.453,1.079-13.146L315.749,8.257
       c-2.789-7.184-7.305-8.256-9.749-8.256s-6.96,1.073-9.749,8.255l-35,90.114c-1.821,4.692-1.427,9.482,1.079,13.145
       C264.837,115.178,269.162,117.278,274.194,117.278z"/>
     <path d="M337.806,494.723h-63.612c-5.032,0-9.357,2.102-11.863,5.764c-2.506,3.663-2.9,8.453-1.079,13.145l34.999,90.114
       c2.789,7.182,7.305,8.254,9.749,8.254c2.444,0,6.96-1.072,9.749-8.254l34.999-90.115c1.821-4.69,1.429-9.48-1.079-13.144
       C347.162,496.825,342.838,494.723,337.806,494.723z"/>
     <path d="M127.54,190.824c2.412,5.477,7.028,8.746,12.348,8.746c3.644,0,7.257-1.608,10.174-4.526l44.981-44.98
       c3.558-3.558,5.13-8.102,4.312-12.466c-0.819-4.362-3.928-8.028-8.532-10.056l-88.467-38.973c-2.233-0.983-4.336-1.482-6.25-1.482
       c-3.201,0-5.959,1.415-7.568,3.882c-1.357,2.081-2.454,5.747,0.031,11.389L127.54,190.824z"/>
     <path d="M484.46,421.178c-2.412-5.477-7.027-8.746-12.346-8.746c-3.645,0-7.259,1.609-10.177,4.527l-44.981,44.98
       c-3.558,3.559-5.13,8.104-4.312,12.466c0.818,4.362,3.929,8.028,8.532,10.055l88.466,38.974c2.233,0.983,4.336,1.482,6.25,1.482
       c3.201,0,5.959-1.417,7.568-3.882c1.358-2.083,2.455-5.748-0.03-11.389L484.46,421.178z"/>
     <path d="M461.937,195.044c2.918,2.918,6.532,4.526,10.176,4.526c5.319,0,9.934-3.269,12.348-8.746l38.972-88.465
       c2.486-5.643,1.389-9.308,0.031-11.389c-1.609-2.467-4.367-3.882-7.568-3.882c-1.914,0-4.017,0.499-6.251,1.483l-88.466,38.97
       c-4.604,2.029-7.715,5.694-8.532,10.057c-0.818,4.363,0.754,8.908,4.312,12.466L461.937,195.044z"/>
     <path d="M150.063,416.959c-2.918-2.918-6.532-4.527-10.177-4.527c-5.319,0-9.934,3.269-12.346,8.746l-38.972,88.465
       c-2.486,5.643-1.389,9.308-0.031,11.39c1.609,2.466,4.368,3.882,7.568,3.882c1.914,0,4.017-0.499,6.251-1.484l88.466-38.972
       c4.604-2.028,7.715-5.694,8.532-10.056c0.818-4.362-0.753-8.907-4.312-12.466L150.063,416.959z"/>
     <path d="M603.745,296.251l-90.111-34.996c-1.942-0.755-3.896-1.137-5.806-1.137c-7.593,0-13.104,5.921-13.104,14.078l0.001,63.613
       c0,8.157,5.511,14.078,13.104,14.078c1.912,0,3.866-0.382,5.806-1.136l90.112-34.999c7.182-2.79,8.254-7.306,8.254-9.751
       C612.001,303.558,610.926,299.04,603.745,296.251z"/>
     <path d="M104.173,351.886c7.594,0,13.106-5.921,13.106-14.078v-63.613c0-8.157-5.511-14.078-13.106-14.078
       c-1.912,0-3.864,0.382-5.805,1.136L8.255,296.251C1.073,299.04,0,303.556,0,306.001c0,2.444,1.072,6.96,8.255,9.752l90.111,34.996
       C100.308,351.503,102.261,351.886,104.173,351.886z"/>
   </g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 <g>
 </g>
 </svg>`;
  }
})