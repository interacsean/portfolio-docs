var hideDisclaimer;
if (localStorage.getItem('mockup-dismissed') !== 'true'){
   document.write(`
      <div id="mockup-disclaimer">
         <p>Note that the file you
            are viewing is: merely for mock-up and design purposes;
            possibly out of date, and; not a representation of my
            development approach).</p>
         <span class='button -close' onclick='hideDisclaimer();'>
           &times;
         </span>
      </div>`);

   hideDisclaimer = ()=>{
      document.getElementById("mockup-disclaimer")
         .style.display = "none";
      localStorage.setItem('mockup-dismissed', 'true');
   }
}
