/*Globale variabelen*/
let daySelect, sols;
let dataArray = [];
let customHeaders = new Headers();
customHeaders.append('Accept', 'application/json');

/*Get functies*/
const fetchData = function (url) {
    return fetch(url, { headers: customHeaders })
        .then(r => r.json()) //Arrow vervangt de return
        .then(data => data); //Het is pas deze data die wordt gereturnd
}

const getData = async function (url) {
    try {
        let data = await fetchData(url);
        //console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const LoadInfo = async function () {
    dataArray = [];
    let htmltemp = "";
    let htmlpres = "";
    let htmlwind = "";
    let html = "";
    let url = `https://api.nasa.gov/insight_weather/?api_key=8gDyVN1GWGv6QnHf3ZMxLwKvBQcQB4k4pteteai6&feedtype=json&ver=1.0`;
    let data = await fetchData(url);
    for (let sol of data.sol_keys) {
        dataArray.push(sol);
    }
    for (i = 0; i < dataArray.length; i++) {
        if (dataArray[i] == dataArray[0]){
            html += `<h3 class="u-margin__0 js-daySelected">` +  dataArray[i] + `</h3>`;
            let number = dataArray[i];
            htmltemp += `<h2 class="o-layout--align-center">` + Math.floor(data[number].AT.av) + `</h2>
            <div class="o-layout o-layout--justify-space-between">
                <p>C</p>
                <p>F</p>
            </div>
            <div class="o-layout o-layout--justify-center">
            `

            if (Math.floor(data[number].AT.av) >= -0){
                htmltemp +=`<svg id="SvgjsSvg1011" width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1012"></defs><g id="SvgjsG1013"><!--?xml version="1.0" encoding="UTF-8"?--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" xml:space="preserve" width="50" height="50"><style type="text/css">.st0{fill:#FC0000;} .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><path class="st0 colorFC0000 svgShape" d="M43.334 41.697c-3.51 6.78-12.12 8.23-12.49 8.29-.05.01-.11.01-.16.01-.06 0-.12-.01-.18-.02-.04 0-.08-.01-.12-.03a.403.403 0 0 1-.2-.09c-.05-.03-.1-.06-.14-.1a.314.314 0 0 1-.11-.09c-.01-.01-.02-.02-.02-.03-.11-.14-.18-.3-.21-.46-.01-.01-.01-.01-.01-.02-.01-.05-.01-.1-.01-.15 0-.06.01-.12.02-.18 0-.04.02-.09.03-.14.01-.02.01-.03.01-.04.03-.05.05-.1.08-.14.03-.05.06-.1.1-.14.02-.04.06-.08.1-.11l.03-.03c6.82-6.08 5.24-11.77 5.17-12.01-.03-.07-.04-.15-.05-.22-.32-5.02-4.26-10.62-6.74-13.67-.47 4.74-3.4 11.87-4.14 13.6-.19.45-.68.69-1.14.59a1 1 0 0 1-.78-1.02c.06-1.57-1.21-3.66-2.33-5.15-.5 1.26-1.46 3.21-3.28 6.3-.81 1.38-1.28 2.79-1.39 4.17-.39 4.97 2.81 6.8 3.61 7.17.11.05.17.07.18.07.15.06.28.14.38.26.04.03.07.07.1.11.05.09.1.18.12.27.06.15.07.31.04.47-.01.06-.03.12-.05.18-.11.3-.35.52-.64.6-.05.02-.1.03-.15.04-.05.01-.1.01-.15.01-.11 0-.23-.02-.34-.06h-.02c-5.28-2.05-8.75-5.16-10.3-9.24-2.38-6.25.47-12.99 1.8-15.6.67-1.3 1.53-2.62 2.71-4.16 6.51-8.49 8.29-18.02 8.31-18.11.06-.37.33-.67.69-.78.35-.11.74-.01 1.01.25 5.57 5.7 9.92 10.26 12.91 13.56 2.64 2.91 4.77 5.99 6.33 9.18 3.24 6.61 3.72 12.21 1.42 16.66z" fill="#dd4e18"></path><metadata><rdf:rdf xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:description about="https://iconscout.com/legal#licenses" dc:title="flame,fire,burn,hot" dc:description="flame,fire,burn,hot" dc:publisher="Iconscout" dc:date="2017-12-03" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:bag><rdf:li>Icon River</rdf:li></rdf:bag></dc:creator></rdf:description></rdf:rdf></metadata></svg></g></svg>`
            }else{
                htmltemp +=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="50" height="50" viewBox="0 0 50 50.000001" id="svg17545" version="1.1" inkscape:version="0.91 r13725" sodipodi:docname="snowflake-snow-xmas-christmas.svg">
                  <defs id="defs17547"/>
                  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="7.6620008" inkscape:cx="-4.4976593" inkscape:cy="30.897755" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="716" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:snap-bbox="true" inkscape:object-nodes="true" inkscape:snap-smooth-nodes="true">
                    <inkscape:grid type="xygrid" id="grid18115" empspacing="4"/>
                  </sodipodi:namedview>

                  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-1004.3622)">
                    <g id="g16277" transform="matrix(1.1337895,0,0,1.1330482,3210.1057,-1007.2365)" style="fill:#b2e3ff;fill-opacity:1">
                      <path inkscape:connector-curvature="0" id="path16280" d="m -2806.5,1801.9785 -1.2617,0.8125 8.9844,13.9746 1.2617,-0.8105 -8.9844,-13.9766 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16282" d="m -2789.3359,1791.6484 -15.9707,3.9942 0.3632,1.4551 15.9727,-3.9942 -0.3652,-1.4551 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16284" d="m -2813.7773,1801.9785 -8.9844,13.9766 1.2617,0.8105 8.9844,-13.9746 -1.2617,-0.8125 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16286" d="m -2830.9434,1791.6484 -0.3632,1.4551 15.9707,3.9942 0.3652,-1.4551 -15.9727,-3.9942 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16288" d="m -2810.8887,1775.3867 0,16.9727 1.5,0 0,-16.9727 -1.5,0 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16290" d="m -2810.1387,1785.3633 -10.8476,9.7656 3.6328,12.9941 13.7539,0 4.3281,-12.9785 -0.3652,-0.3281 -10.502,-9.4531 z m 0,2.0195 9.1328,8.2188 -3.6738,11.0214 -11.5351,0 -3.0762,-11.0019 9.1523,-8.2383 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16292" d="m -2810.1387,1791.4121 -5.8574,4.6856 1.9649,7.0253 7.4316,0 2.3379,-7.0078 -0.4082,-0.3261 -5.4688,-4.377 z m 0,1.9219 4.1231,3.2969 -1.6641,4.9921 -5.2129,0 -1.3906,-4.9746 4.1445,-3.3144 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16294" d="m -2814.7422,1782.7363 -0.7715,1.2871 5.375,3.2246 5.3731,-3.2246 -0.7715,-1.2871 -4.6016,2.7617 -4.6035,-2.7617 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16299" d="m -2814.7422,1776.7363 -0.7715,1.2871 5.375,3.2246 5.3731,-3.2246 -0.7715,-1.2871 -4.6016,2.7617 -4.6035,-2.7617 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16307" d="m -2821.5254,1789.1133 -1.3965,0.5449 1.9199,4.9297 -3.6953,4.2851 1.1348,0.9786 4.2852,-4.9668 -2.2481,-5.7715 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16317" d="m -2827.5254,1788.1133 -1.3965,0.5449 1.9199,4.9297 -3.6953,4.2851 1.1348,0.9786 4.2852,-4.9668 -2.2481,-5.7715 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16325" d="m -2798.7539,1789.1133 -2.2481,5.7715 4.2852,4.9668 1.1367,-0.9786 -3.6972,-4.2851 1.9218,-4.9297 -1.3984,-0.5449 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16333" d="m -2792.7539,1788.1133 -2.2481,5.7715 4.2852,4.9668 1.1367,-0.9786 -3.6972,-4.2851 1.9218,-4.9297 -1.3984,-0.5449 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16340" d="m -2815.7637,1806.6172 -6.3711,0.078 0.02,1.5 5.5136,-0.066 2.8145,4.6211 1.2812,-0.7793 -3.2578,-5.3535 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16343" d="m -2818.7637,1811.6172 -6.3711,0.078 0.02,1.5 5.5136,-0.066 2.8145,4.6211 1.2812,-0.7793 -3.2578,-5.3535 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16345" d="m -2804.5137,1806.6172 -3.2578,5.3535 1.2813,0.7793 2.8125,-4.6211 5.5156,0.066 0.018,-1.5 -6.3692,-0.078 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16348" d="m -2801.5137,1811.6172 -3.2578,5.3535 1.2813,0.7793 2.8125,-4.6211 5.5156,0.066 0.018,-1.5 -6.3692,-0.078 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                    </g>
                  </g>

                	<metadata>
                		<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                			<rdf:Description about="https://iconscout.com/legal#licenses" dc:title="snowflake-snow-xmas-christmas" dc:description="snowflake-snow-xmas-christmas" dc:publisher="Iconscout" dc:date="2017-06-29" dc:format="image/svg+xml" dc:language="en">
                				<dc:creator>
                					<rdf:Bag>
                						<rdf:li>Vignesh Oviyan</rdf:li>
                					</rdf:Bag>
                				</dc:creator>
                			</rdf:Description>
                		</rdf:RDF>
                    </metadata></svg>
                </div>
                `
            }

            htmlwind += `<h2>` + Math.floor(data[number].HWS.av) + `</h2>
            <p>`+ data[number].WD[1].compass_point +`</p>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>Min</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>Max</p>
                </div>
            </div>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].HWS.mn) +` m/s</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].HWS.mx) +` m/s</p>
                </div>
            </div>`

            htmlpres += `<h2>` + Math.floor(data[number].PRE.av) + `</h2>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>Min</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>Max</p>
                </div>
            </div>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].PRE.mn) +` Pa</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].PRE.mx) +` Pa</p>
                </div>
            </div>`
        }else{
            html += `<h3 class="c-not-selected u-margin__0 js-daySelected">` +  dataArray[i] + `</h3>`;
        }
    };
    if (document.querySelector('.js-sols')){
        document.querySelector('.js-sols').innerHTML = html;
        document.querySelector('.js-temperature').innerHTML = htmltemp;
        document.querySelector('.js-pres').innerHTML = htmlpres;
        document.querySelector('.js-wind').innerHTML = htmlwind;
    }

}

const infoByDay = async function (day) {
    let htmltemp = "";
    let htmlpres = "";
    let htmlwind = "";
    let html = "";
    let url = `https://api.nasa.gov/insight_weather/?api_key=8gDyVN1GWGv6QnHf3ZMxLwKvBQcQB4k4pteteai6&feedtype=json&ver=1.0`;
    let data = await fetchData(url);

    for (i = 0; i < dataArray.length; i++) {
        if (dataArray[i] == day){
            html += `<h3 class="u-margin__0 js-daySelected">` +  dataArray[i] + `</h3>`;
            let number = dataArray[i];
            htmltemp += `<h2 class="o-layout--align-center">` + Math.floor(data[number].AT.av) + `</h2>
            <div class="o-layout o-layout--justify-space-between">
                <p>C</p>
                <p>F</p>
            </div>
            <div class="o-layout o-layout--justify-center">
            `

            if (Math.floor(data[number].AT.av) >= -0){
                htmltemp +=`<svg id="SvgjsSvg1011" width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1012"></defs><g id="SvgjsG1013"><!--?xml version="1.0" encoding="UTF-8"?--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" xml:space="preserve" width="50" height="50"><style type="text/css">.st0{fill:#FC0000;} .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><path class="st0 colorFC0000 svgShape" d="M43.334 41.697c-3.51 6.78-12.12 8.23-12.49 8.29-.05.01-.11.01-.16.01-.06 0-.12-.01-.18-.02-.04 0-.08-.01-.12-.03a.403.403 0 0 1-.2-.09c-.05-.03-.1-.06-.14-.1a.314.314 0 0 1-.11-.09c-.01-.01-.02-.02-.02-.03-.11-.14-.18-.3-.21-.46-.01-.01-.01-.01-.01-.02-.01-.05-.01-.1-.01-.15 0-.06.01-.12.02-.18 0-.04.02-.09.03-.14.01-.02.01-.03.01-.04.03-.05.05-.1.08-.14.03-.05.06-.1.1-.14.02-.04.06-.08.1-.11l.03-.03c6.82-6.08 5.24-11.77 5.17-12.01-.03-.07-.04-.15-.05-.22-.32-5.02-4.26-10.62-6.74-13.67-.47 4.74-3.4 11.87-4.14 13.6-.19.45-.68.69-1.14.59a1 1 0 0 1-.78-1.02c.06-1.57-1.21-3.66-2.33-5.15-.5 1.26-1.46 3.21-3.28 6.3-.81 1.38-1.28 2.79-1.39 4.17-.39 4.97 2.81 6.8 3.61 7.17.11.05.17.07.18.07.15.06.28.14.38.26.04.03.07.07.1.11.05.09.1.18.12.27.06.15.07.31.04.47-.01.06-.03.12-.05.18-.11.3-.35.52-.64.6-.05.02-.1.03-.15.04-.05.01-.1.01-.15.01-.11 0-.23-.02-.34-.06h-.02c-5.28-2.05-8.75-5.16-10.3-9.24-2.38-6.25.47-12.99 1.8-15.6.67-1.3 1.53-2.62 2.71-4.16 6.51-8.49 8.29-18.02 8.31-18.11.06-.37.33-.67.69-.78.35-.11.74-.01 1.01.25 5.57 5.7 9.92 10.26 12.91 13.56 2.64 2.91 4.77 5.99 6.33 9.18 3.24 6.61 3.72 12.21 1.42 16.66z" fill="#dd4e18"></path><metadata><rdf:rdf xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:description about="https://iconscout.com/legal#licenses" dc:title="flame,fire,burn,hot" dc:description="flame,fire,burn,hot" dc:publisher="Iconscout" dc:date="2017-12-03" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:bag><rdf:li>Icon River</rdf:li></rdf:bag></dc:creator></rdf:description></rdf:rdf></metadata></svg></g></svg>`
            }else{
                htmltemp +=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="50" height="50" viewBox="0 0 50 50.000001" id="svg17545" version="1.1" inkscape:version="0.91 r13725" sodipodi:docname="snowflake-snow-xmas-christmas.svg">
                  <defs id="defs17547"/>
                  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="7.6620008" inkscape:cx="-4.4976593" inkscape:cy="30.897755" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="716" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:snap-bbox="true" inkscape:object-nodes="true" inkscape:snap-smooth-nodes="true">
                    <inkscape:grid type="xygrid" id="grid18115" empspacing="4"/>
                  </sodipodi:namedview>

                  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-1004.3622)">
                    <g id="g16277" transform="matrix(1.1337895,0,0,1.1330482,3210.1057,-1007.2365)" style="fill:#b2e3ff;fill-opacity:1">
                      <path inkscape:connector-curvature="0" id="path16280" d="m -2806.5,1801.9785 -1.2617,0.8125 8.9844,13.9746 1.2617,-0.8105 -8.9844,-13.9766 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16282" d="m -2789.3359,1791.6484 -15.9707,3.9942 0.3632,1.4551 15.9727,-3.9942 -0.3652,-1.4551 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16284" d="m -2813.7773,1801.9785 -8.9844,13.9766 1.2617,0.8105 8.9844,-13.9746 -1.2617,-0.8125 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16286" d="m -2830.9434,1791.6484 -0.3632,1.4551 15.9707,3.9942 0.3652,-1.4551 -15.9727,-3.9942 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16288" d="m -2810.8887,1775.3867 0,16.9727 1.5,0 0,-16.9727 -1.5,0 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16290" d="m -2810.1387,1785.3633 -10.8476,9.7656 3.6328,12.9941 13.7539,0 4.3281,-12.9785 -0.3652,-0.3281 -10.502,-9.4531 z m 0,2.0195 9.1328,8.2188 -3.6738,11.0214 -11.5351,0 -3.0762,-11.0019 9.1523,-8.2383 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16292" d="m -2810.1387,1791.4121 -5.8574,4.6856 1.9649,7.0253 7.4316,0 2.3379,-7.0078 -0.4082,-0.3261 -5.4688,-4.377 z m 0,1.9219 4.1231,3.2969 -1.6641,4.9921 -5.2129,0 -1.3906,-4.9746 4.1445,-3.3144 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16294" d="m -2814.7422,1782.7363 -0.7715,1.2871 5.375,3.2246 5.3731,-3.2246 -0.7715,-1.2871 -4.6016,2.7617 -4.6035,-2.7617 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16299" d="m -2814.7422,1776.7363 -0.7715,1.2871 5.375,3.2246 5.3731,-3.2246 -0.7715,-1.2871 -4.6016,2.7617 -4.6035,-2.7617 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16307" d="m -2821.5254,1789.1133 -1.3965,0.5449 1.9199,4.9297 -3.6953,4.2851 1.1348,0.9786 4.2852,-4.9668 -2.2481,-5.7715 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16317" d="m -2827.5254,1788.1133 -1.3965,0.5449 1.9199,4.9297 -3.6953,4.2851 1.1348,0.9786 4.2852,-4.9668 -2.2481,-5.7715 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16325" d="m -2798.7539,1789.1133 -2.2481,5.7715 4.2852,4.9668 1.1367,-0.9786 -3.6972,-4.2851 1.9218,-4.9297 -1.3984,-0.5449 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16333" d="m -2792.7539,1788.1133 -2.2481,5.7715 4.2852,4.9668 1.1367,-0.9786 -3.6972,-4.2851 1.9218,-4.9297 -1.3984,-0.5449 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16340" d="m -2815.7637,1806.6172 -6.3711,0.078 0.02,1.5 5.5136,-0.066 2.8145,4.6211 1.2812,-0.7793 -3.2578,-5.3535 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16343" d="m -2818.7637,1811.6172 -6.3711,0.078 0.02,1.5 5.5136,-0.066 2.8145,4.6211 1.2812,-0.7793 -3.2578,-5.3535 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16345" d="m -2804.5137,1806.6172 -3.2578,5.3535 1.2813,0.7793 2.8125,-4.6211 5.5156,0.066 0.018,-1.5 -6.3692,-0.078 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                      <path inkscape:connector-curvature="0" id="path16348" d="m -2801.5137,1811.6172 -3.2578,5.3535 1.2813,0.7793 2.8125,-4.6211 5.5156,0.066 0.018,-1.5 -6.3692,-0.078 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#b2e3ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                    </g>
                  </g>

                	<metadata>
                		<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                			<rdf:Description about="https://iconscout.com/legal#licenses" dc:title="snowflake-snow-xmas-christmas" dc:description="snowflake-snow-xmas-christmas" dc:publisher="Iconscout" dc:date="2017-06-29" dc:format="image/svg+xml" dc:language="en">
                				<dc:creator>
                					<rdf:Bag>
                						<rdf:li>Vignesh Oviyan</rdf:li>
                					</rdf:Bag>
                				</dc:creator>
                			</rdf:Description>
                		</rdf:RDF>
                    </metadata></svg>
                </div>
                `
            }

            htmlwind += `<h2>` + Math.floor(data[number].HWS.av) + `</h2>
            <p>`+ data[number].WD[1].compass_point +`</p>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>Min</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>Max</p>
                </div>
            </div>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].HWS.mn) +` m/s</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].HWS.mx) +` m/s</p>
                </div>
            </div>`

            htmlpres += `<h2>` + Math.floor(data[number].PRE.av) + `</h2>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>Min</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>Max</p>
                </div>
            </div>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].PRE.mn) +` Pa</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].PRE.mx) +` Pa</p>
                </div>
            </div>`
        }else{
            html += `<h3 class="c-not-selected u-margin__0 js-daySelected">` +  dataArray[i] + `</h3>`;
        }
    };
    if (document.querySelector('.js-sols')){
        document.querySelector('.js-sols').innerHTML = html;
        document.querySelector('.js-temperature').innerHTML = htmltemp;
        document.querySelector('.js-pres').innerHTML = htmlpres;
        document.querySelector('.js-wind').innerHTML = htmlwind;
    }

}

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 20, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;
          if (document.getElementById('days')){
                document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            }

    }, second)


/*Event listeners*/

const addEventListeners = function () {
    if(sols){
        sols.addEventListener('click', function (e) {
            infoByDay(e.target.innerText);
        });
    }
};

/* Media Queries */

const marsChangeOnMedia = function () {
    const mq = window.matchMedia( "(min-width: 960px)" );

    if (mq.matches) {
        // window width is at least 960px
    } else {
        // window width is less than 960px
        console.log(document.querySelector(".js-src").src);
        document.querySelector(".js-src").src = "img/mars.png"
    }
}

/* INIT */

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    daySelect = document.querySelector('.js-daySelected');
    sols = document.querySelector('.js-sols');
    LoadInfo();
    addEventListeners();
    marsChangeOnMedia();
});
