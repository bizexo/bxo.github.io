var svgIcons = `\
<svg style="position: absolute; width: 0; height: 0;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
<defs>\
<symbol id="icon_letter">\
<g xmlns="http://www.w3.org/2000/svg" transform="matrix(1 0 0 1 -89 -644 )">
    <path d="M 19 23  L 1 23  L 1 0  L 14.375 0  L 19 5.11111111111111  L 19 23  Z M 17.625 5.11111111111111  L 14.375 1.78888888888889  L 14.375 5.11111111111111  L 17.625 5.11111111111111  Z M 18 21.7222222222222  L 18 8.94444444444444  L 18.125 6.38888888888889  L 13.125 6.38888888888889  L 13.125 1.27777777777778  L 2 1.27777777777778  L 2 21.7222222222222  L 18 21.7222222222222  Z M 15.625 17.8888888888889  L 15.625 19  L 4.375 19  L 4.375 17.8888888888889  L 15.625 17.8888888888889  Z M 4.375 16.6111111111111  L 4.375 15  L 15.625 15  L 15.625 16.6111111111111  L 4.375 16.6111111111111  Z M 4.375 14  L 4.375 12.7777777777778  L 15.625 12.7777777777778  L 15.625 14  L 4.375 14  Z M 10.625 10.2222222222222  L 10.625 11.5  L 4.375 11.5  L 4.375 10.2222222222222  L 10.625 10.2222222222222  Z " fill-rule="nonzero" fill="#ffffff" stroke="none" transform="matrix(1 0 0 1 89 644 )"/>
  </g>
  </symbol>\
<symbol id="icon_quote" viewBox="0 0 48 48">\
<g xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Artboard-Copy" transform="translate(-347.000000, -9.000000)"><path d="M352.377,27.8345 C352.631,28.6105 353.066,29.3245 353.676,29.9645 C354.313,30.6365 355.15,31.1585 356.19,31.5325 C357.225,31.9055 358.559,32.0975 360.205,32.0975 L362.438,32.0975 C362.17,34.8405 361.191,37.1775 359.502,39.1095 C357.813,41.0375 355.469,42.7305 352.475,44.1845 L354.289,46.9995 C358.234,45.3205 361.606,42.8655 364.406,39.6195 C367.209,36.3735 368.602,33.1555 368.602,29.9645 C368.602,26.5365 367.795,23.8485 366.164,21.9065 C364.533,19.9655 362.199,19.0015 359.158,19.0015 C357.234,19.0015 355.557,19.6415 354.135,20.9265 C352.711,22.2115 352,23.7145 352,25.4295 C352,26.2535 352.127,27.0585 352.377,27.8345 M372.775,27.8345 C373.027,28.6105 373.465,29.3245 374.072,29.9645 C374.711,30.6365 375.549,31.1585 376.584,31.5325 C377.623,31.9055 378.957,32.0975 380.602,32.0975 L382.832,32.0975 C382.566,34.8405 381.588,37.1775 379.898,39.1095 C378.207,41.0375 375.867,42.7305 372.871,44.1845 L374.688,46.9995 C378.631,45.3205 382.004,42.8655 384.805,39.6195 C387.606,36.3735 389,33.1555 389,29.9645 C389,26.5365 388.191,23.8485 386.561,21.9065 C384.932,19.9655 382.598,19.0015 379.557,19.0015 C377.629,19.0015 375.955,19.6415 374.533,20.9265 C373.109,22.2115 372.398,23.7145 372.398,25.4295 C372.398,26.2535 372.522,27.0585 372.775,27.8345" fill="#000000" id="quote1"/><g id="slices" transform="translate(47.000000, 9.000000)"/></g></g></symbol>\
<symbol id="icon_download" viewBox="0 0 64 64">\
<path d="M43.619 5.717a1.291 1.291 0 0 0-.929-.413H13.87c-3.844 0-7.016 3.16-7.016 7.003v39.386c0 3.843 3.172 7.003 7.016 7.003H50.13c3.844 0 7.016-3.16 7.016-7.003V20.419c0-.335-.155-.658-.374-.903l-13.154-13.8zm-1.011 41.502H21.38c-.71 0-1.29.58-1.29 1.288 0 .71.58 1.29 1.29 1.29h21.24c.71 0 1.29-.58 1.29-1.29 0-.708-.58-1.288-1.303-1.288zm-11.555-7.174a1.3 1.3 0 0 0 .941.412c.361 0 .697-.155.941-.412l7.558-8.112a1.285 1.285 0 0 0-.065-1.82 1.284 1.284 0 0 0-1.817.066l-5.327 5.713V21.808c0-.71-.581-1.29-1.29-1.29-.709 0-1.29.58-1.29 1.29v14.084l-5.314-5.713c-.489-.516-1.302-.555-1.817-.065-.516.49-.555 1.303-.065 1.819l7.545 8.112zm12.94-30.189l8.809 9.247h-5.728a3.07 3.07 0 0 1-3.081-3.07V9.857zm6.138 46.261H13.87c-2.412 0-4.437-2-4.437-4.424V12.307c0-2.412 2.012-4.424 4.437-4.424h27.544v8.15a5.642 5.642 0 0 0 5.661 5.65h7.493v30.01c0 2.425-2.011 4.424-4.436 4.424z"/>\
</symbol>\
<symbol id="icon_newletter">\
<path d="M.026 24l11.974-11.607 11.974 11.607h-23.948zm11.964-23.961l-11.99 8.725v12.476l7.352-7.127-5.653-4.113 10.291-7.488 10.309 7.488-5.655 4.108 7.356 7.132v-12.476l-12.01-8.725z"/>\
</symbol>\
<symbol id="icon_environmental"  viewBox="0 0 128 128">\
<path d="M115.301 23.237h-14.71c-3.32 0-6.37 1.184-8.748 3.15V18.872c0-9.819-7.987-17.805-17.804-17.805h-16.68a2.5 2.5 0 0 0-2.5 2.5v6.866c0 9.817 7.987 17.804 17.805 17.804h14.18v25.344a30.94 30.94 0 0 0-1.991-.066c-6.57 0-12.852 2.025-18.164 5.857a2.5 2.5 0 1 0 2.925 4.055 25.89 25.89 0 0 1 15.239-4.912c1.333 0 2.65.106 3.945.304.107.023.217.04.33.05a26.126 26.126 0 0 1 18.557 13.108 2.502 2.502 0 0 0 3.4.975 2.5 2.5 0 0 0 .974-3.398 31.13 31.13 0 0 0-20.216-15.24v-8.083h12.209c7.582 0 13.75-6.167 13.75-13.75v-6.743a2.5 2.5 0 0 0-2.501-2.5zM22.79 99.717a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zm104.376-17.514c-2.182-4.941-7.977-7.186-12.92-5.005-.012.006-.024.012-.037.016l-16.335 7.534a2.5 2.5 0 0 0 2.094 4.54l16.315-7.523a4.802 4.802 0 0 1 6.309 2.458 4.802 4.802 0 0 1-2.451 6.326l-33.427 14.758a19.37 19.37 0 0 1-16.494-.373l-12.237-6.08a24.368 24.368 0 0 0-20.738-.47l-.24.108L27.86 77.78l12.696-5.605a25.264 25.264 0 0 1 19.003-.608l24.606 9.037c2.244.825 3.44 3.336 2.667 5.597a4.442 4.442 0 0 1-5.616 2.767l-19.028-6.436a2.5 2.5 0 0 0-1.603 4.736l19.028 6.436a9.361 9.361 0 0 0 3.01.497c3.924 0 7.602-2.47 8.94-6.38 1.647-4.813-.898-10.157-5.675-11.91l-24.605-9.037a30.241 30.241 0 0 0-22.746.726L25.76 73.242a6.282 6.282 0 0 0-3.01-2.445 6.287 6.287 0 0 0-4.84.11l-16.413 7.19A2.5 2.5 0 0 0 0 80.389v44.045a2.5 2.5 0 0 0 3.626 2.232l31.865-16.097a6.291 6.291 0 0 0 3.281-3.477 6.279 6.279 0 0 0 .194-4l.298-.132a19.382 19.382 0 0 1 16.495.375l12.235 6.079a24.366 24.366 0 0 0 20.74.469l33.426-14.758c4.942-2.183 7.188-7.979 5.006-12.92zm-93.055 23.082c-.13.332-.38.594-.706.738l-.117.056L5 120.369v-10.943l7.393-3.63a2.5 2.5 0 1 0-2.204-4.49L5 103.854V82.023l14.923-6.54a1.335 1.335 0 0 1 1.758.681l11.76 26.633a.02.02 0 0 0 .003.007l.644 1.46c.144.326.152.689.023 1.02zm52.732-82.048h-14.18c-7.06 0-12.804-5.743-12.804-12.804V6.067h14.18c7.059 0 12.804 5.744 12.804 12.805v4.365zm25.957 9.245c0 4.825-3.925 8.75-8.749 8.75H91.842v-4.247c0-4.823 3.925-8.748 8.749-8.748H112.8v4.245z"/>\
</symbol>\
<symbol id="icon_corporate" viewBox="0 0 512 512">\
<path d="M301.271 162.192h-90.198c-17.211 0-31.213 13.928-31.213 31.047v40.027h152.273v-40.38c0-16.925-13.844-30.694-30.862-30.694zm-36.307 57.854H247.03v-17.85h17.934v17.85zm0-26.786H247.03v-17.853h17.934v17.853z"/><path d="M170.489 193.239c0-22.286 18.207-40.418 40.584-40.418h90.198c22.184 0 40.232 17.974 40.232 40.065v40.38h17.576v-80.143c0-34.004-22.395-64.651-54.281-75.728.052.281.088.565.135.847.041.258.084.515.122.774.077.529.144 1.06.204 1.591.029.262.063.522.088.785.054.558.094 1.118.129 1.68.015.236.035.47.047.708.038.796.061 1.593.061 2.394 0 27.13-22.166 49.202-49.412 49.202-27.242 0-49.404-22.072-49.404-49.202 0-.807.023-1.612.062-2.414.011-.223.032-.444.046-.667.035-.584.077-1.167.133-1.747.023-.236.054-.469.081-.705.063-.569.134-1.137.218-1.702.032-.221.069-.44.105-.661.055-.339.102-.681.164-1.019-32.101 10.963-54.654 41.67-54.654 75.862v80.143h17.567v-40.025zM188.842 314.14h134.316v115.765H188.842z"/><path d="M256.172 126.006c22.08 0 40.042-17.868 40.042-39.831 0-.651-.019-1.298-.05-1.941-.009-.184-.025-.366-.037-.55-.028-.465-.061-.93-.106-1.391-.019-.197-.044-.395-.065-.592a39.747 39.747 0 0 0-.174-1.349c-.027-.184-.057-.367-.086-.55-.076-.469-.16-.936-.252-1.399-.03-.153-.063-.307-.095-.459A39.555 39.555 0 0 0 295 76.44l-.083-.324c-.149-.57-.31-1.136-.484-1.695l-.032-.104c-5.086-16.188-20.299-27.971-38.229-27.971-17.922 0-33.13 11.779-38.219 27.964l-.033.111c-.177.568-.34 1.141-.492 1.719l-.06.234a42.12 42.12 0 0 0-.376 1.617l-.069.341a38.305 38.305 0 0 0-.275 1.526c-.023.146-.048.292-.069.439a38.27 38.27 0 0 0-.186 1.455c-.019.17-.041.339-.058.511a40.9 40.9 0 0 0-.112 1.454c-.01.169-.025.336-.034.506-.032.648-.05 1.298-.05 1.953 0 21.962 17.959 39.83 40.033 39.83zM395.389 207.061h53.713v26.206h-53.713zM390.703 242.637H45.154v26.38H466.846v-26.38h-13.059zM395.389 171.481v26.208H466.846v-26.208zM108.013 465.655H403.98V278.388H108.013v187.267zm71.458-156.201a4.686 4.686 0 0 1 4.686-4.686h143.687a4.686 4.686 0 0 1 4.686 4.686V434.59a4.686 4.686 0 0 1-4.686 4.686H184.157a4.687 4.687 0 0 1-4.686-4.686V309.454z"/>\
</symbol>\
<symbol id="icon_homeCareServices" viewBox="0 0 52 52">\
<path d="M48.655 27.7l-22-19.1c-.37-.32-.93-.32-1.31 0l-8.343 7.243v-3.575a1 1 0 1 0-2 0v5.312L3.345 27.7c-.42.36-.46.99-.1 1.41.36.41 1 .46 1.41.1l5.35-4.64v18.07c0 .55.44 1 1 1h30c.55 0 1-.45 1-1V24.57l5.34 4.64c.19.16.42.24.66.24.28 0 .55-.11.75-.34a.998.998 0 0 0-.1-1.41zm-21.654 2.757v5.186a1 1 0 1 1-2 0v-5.187a2.987 2.987 0 0 1-1.996-2.816c0-1.65 1.34-3 3-3 1.65 0 3 1.35 3 3a2.993 2.993 0 0 1-2.004 2.817z"/>\
</symbol>\
<symbol id="icon_regalManagement" viewBox="0 0 512 512">\
<path d="M347.541 317.536h47.208c-.349-16.2-2.813-31.677-7.145-45.366h-40.063v45.366zM347.541 370.032h40.332c4.163-13.476 6.534-28.638 6.876-44.496h-47.208v44.496zM347.541 418.413c11.758-1.766 22.843-11.282 31.563-27.25 2.232-4.087 4.229-8.49 6.008-13.131h-37.571v40.381zM339.541 418.413v-40.381h-37.57c1.778 4.641 3.774 9.044 6.007 13.131 8.719 15.969 19.803 25.484 31.563 27.25zM339.541 325.536h-47.204c.341 15.858 2.711 31.021 6.874 44.496h40.33v-44.496zM347.541 224.675v39.495h37.236c-1.694-4.318-3.58-8.426-5.673-12.255-8.719-15.963-19.804-25.476-31.563-27.24zM440.64 325.536h-37.892c-.326 15.728-2.562 30.858-6.519 44.496h31.509a96.514 96.514 0 0 0 12.902-44.496zM386.126 394.998c-4.37 8.001-9.348 14.59-14.761 19.654 20.862-6.244 38.802-19.318 51.207-36.62H393.64c-2.154 6.043-4.658 11.736-7.514 16.966zM371.372 228.437c5.41 5.063 10.386 11.646 14.754 19.643 2.72 4.979 5.128 10.37 7.212 16.091h28.593c-12.377-16.861-30.055-29.597-50.559-35.734zM427.219 272.17h-31.247c4.116 13.862 6.444 29.301 6.776 45.366h37.892a96.499 96.499 0 0 0-13.421-45.366zM239.488 342.432H111.541c-16.452 0-29.837 13.377-29.837 29.818v5.799h187.621v-5.799c0-16.441-13.385-29.818-29.837-29.818zM95.388 250.607c21.105 14.811 19.372 40.881 17.695 66.094-.388 5.836-.771 11.826-.905 17.73h124.11v-29.06c0-.826.256-1.632.732-2.308 10.2-14.447 15.761-25.955 17.026-35.373.018-.148.034-.298.068-.441.387-3.195.273-6.148-.332-8.89-2.759-12.494-15.522-21.96-36.638-34.089a3.999 3.999 0 0 1-1.988-3.071l-3.662-36.661-40.659-7.386a4 4 0 0 1-2.962-2.361l-15.851-37.02a4 4 0 0 1 2.104-5.251 4 4 0 0 1 5.251 2.103l15.004 35.043 40.888 7.428c33.792-4.801 51.448 7.72 60.962 14.474 1.84 1.306 4.07 2.889 5.221 3.366 2.104-3.239 4.255-19.05 5.314-26.835.17-1.251.328-2.381.472-3.406.593-4.236.95-6.793.749-7.973-.108-.635-.526-1.173-2.269-3.2-1.571-1.831-3.725-4.337-6.672-8.494-4.144-5.865-7.403-13.666-10.855-21.924-6.72-16.079-14.336-34.304-29.854-39.516-10.796-3.635-15.489-5.684-15.131-10.058.351-4.265 4.66-4.964 11.802-6.124 7.519-1.221 20.102-3.263 22.512-9.088 1.595-3.855-1.54-9.472-4.451-13.505-9.353-12.935-50.794-13.474-70.709-13.732-5.692-.068-10.024-.382-13.505-.634-11.455-.83-11.901-.862-23.084 11.541-15.483 17.172-30.967 34.344-46.432 51.517-16.553 18.36-21.475 72.99-16.671 115.199 3.013 26.469 8.735 39.117 12.72 41.905zM301.043 415.871c0-16.443-13.385-29.822-29.836-29.822H79.822c-16.453 0-29.839 13.379-29.839 29.822v33.542h251.06v-33.542z"/><path d="M291.111 272.17h-29.695c-2.082 9.74-7.672 20.915-17.128 34.466v10.9h40.05c.332-16.065 2.659-31.505 6.773-45.366zM265.103 264.17h28.643c2.083-5.721 4.491-11.112 7.211-16.091 4.366-7.995 9.34-14.578 14.749-19.64a97.065 97.065 0 0 0-50.603 35.731zM339.541 272.17h-40.062c-4.331 13.689-6.794 29.164-7.143 45.366h47.204V272.17zM290.854 370.032c-3.956-13.638-6.191-28.769-6.517-44.496h-40.05v9.21c17.883 2.275 31.907 17.064 32.967 35.286h13.6zM293.442 378.032h-16.117v.519c8.045 1.313 15.245 5.167 20.744 10.715a124.021 124.021 0 0 1-4.627-11.234zM339.541 224.675c-11.761 1.764-22.846 11.277-31.564 27.239-2.092 3.83-3.978 7.938-5.671 12.256h37.235v-39.495z"/><path d="M495.707 297.471h-30.719a127.588 127.588 0 0 0-4.798-17.891l26.602-15.381a4 4 0 0 0 1.462-5.463l-20.047-34.71a3.999 3.999 0 0 0-5.462-1.464l-26.626 15.356a128.793 128.793 0 0 0-13.114-13.108l15.371-26.618a4.001 4.001 0 0 0-1.463-5.464l-34.729-20.06a4 4 0 0 0-5.465 1.463l-15.368 26.608a124.565 124.565 0 0 0-17.915-4.798v-30.713a4 4 0 0 0-4-4h-40.089a4 4 0 0 0-4 4v34.037a4 4 0 0 0 8 0v-30.037h32.089v30.069a4 4 0 0 0 4 4c.03 0 .059-.008.089-.009.226.083.458.153.702.196a116.506 116.506 0 0 1 20.166 5.402c.247.09.496.15.746.19l.012.009a4.001 4.001 0 0 0 5.464-1.463l15.031-26.025 27.802 16.059-15.032 26.03a4 4 0 0 0 1.464 5.464c.024.014.05.023.074.037.151.183.314.358.502.517a120.531 120.531 0 0 1 14.777 14.775c.149.178.321.324.493.47.017.031.025.065.043.096a3.999 3.999 0 0 0 5.463 1.466l26.046-15.021 16.049 27.786-26.028 15.049a4 4 0 0 0-1.461 5.465c.009.016.021.029.03.045.04.236.094.473.179.705a119.432 119.432 0 0 1 5.411 20.178c.044.253.113.494.201.727 0 .01-.003.018-.003.027a4 4 0 0 0 4 4h30.051v32.121h-30.064a4 4 0 0 0-4 4c0 .023.007.046.007.07-.08.221-.15.447-.192.686a118.05 118.05 0 0 1-5.407 20.171 3.96 3.96 0 0 0-.195.763c-.006.01-.013.017-.019.025a4.001 4.001 0 0 0 1.466 5.465l26.024 15.02-16.048 27.81-26.043-15.044a4.001 4.001 0 0 0-5.465 1.463c-.024.043-.036.088-.058.129a3.934 3.934 0 0 0-.473.459c-4.547 5.394-9.518 10.354-14.773 14.743a4.103 4.103 0 0 0-.518.529c-.022.012-.046.018-.068.03a4.002 4.002 0 0 0-1.466 5.464l15.033 26.061-27.8 16.034-15.033-26.029a4 4 0 0 0-5.464-1.463c-.026.015-.047.036-.072.052-.225.04-.45.089-.672.17a121.947 121.947 0 0 1-20.196 5.414 4.08 4.08 0 0 0-.685.193c-.03 0-.059-.009-.09-.009a4 4 0 0 0-4 4v30.068H16.293a4 4 0 0 0 0 8h343.144a4 4 0 0 0 4-4v-30.721a129.928 129.928 0 0 0 17.926-4.805l15.357 26.591a3.999 3.999 0 0 0 5.462 1.465l34.729-20.029a3.999 3.999 0 0 0 1.467-5.464l-15.37-26.646a128.07 128.07 0 0 0 13.123-13.1l26.612 15.373a4.007 4.007 0 0 0 3.036.399 4 4 0 0 0 2.43-1.864l20.047-34.741a4 4 0 0 0-1.466-5.463l-26.604-15.354a126.251 126.251 0 0 0 4.806-17.916h30.717a4 4 0 0 0 4-4v-40.121a4.003 4.003 0 0 0-4.002-4z"/>\
</symbol>\
<symbol id="icon_facebook">\
<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>\
</symbol>\
<symbol id="icon_twitter">\
<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>\
</symbol>\
<symbol id="icon_instagram">\
<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>\
</symbol>\
<symbol id="icon_phone" viewBox="0 0 485.213 485.213">\
<path d="M242.607 0C108.629 0 .001 108.628.001 242.606c0 133.976 108.628 242.606 242.606 242.606s242.604-108.631 242.604-242.606C485.212 108.628 376.585 0 242.607 0zm128.112 353.989l-19.425 19.429c-3.468 3.463-13.623 5.624-13.949 5.624-61.452.536-120.621-23.602-164.095-67.08-43.593-43.618-67.759-102.998-67.11-164.657 0-.028 2.224-9.892 5.689-13.324l19.424-19.427c7.108-7.141 20.762-10.368 30.327-7.168l4.086 1.363c9.537 3.197 19.55 13.742 22.185 23.457l9.771 35.862c2.635 9.743-.919 23.604-8.025 30.712l-12.97 12.972c12.734 47.142 49.723 84.138 96.873 96.903l12.965-12.975c7.141-7.141 20.997-10.692 30.719-8.061l35.857 9.806c9.717 2.67 20.26 12.62 23.456 22.154l1.363 4.145c3.168 9.538-.034 23.189-7.141 30.265z"/>\
</symbol>\
<symbol id="icon_search" viewBox="0 0 56.966 56.966">\
<path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/>\
</symbol>\
<symbol id="icon_rightArrow" viewBox="0 0 31.49 31.49">\
<path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z"/>\
</symbol>\
</defs>\
        </svg>`
$(document).ready(function () {
        $("body").prepend(svgIcons);
});