const song = {
     name: 'Dying to live',
     artist: 'Tupac',
     featuring: 'Biggie Smalls'
 };
const markup=
     `
     <div class="song">
      <p>
       ${song.name} - ${song.artist}
       (Featuring ${song.featuring})
      </p>
     </div>
     `

document.getElementById("block").innerHTML=markup;

 export {markup}