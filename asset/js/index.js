var seaSons =["Summer","winter", "Rainy","cloudy","windy".toLowerCase];

var userInput = prompt('What is your fevorite weather?\nHint:(Summer winter Rainy cloudy windy)');
if(userInput === "Winter"){
    document.write
    (`<div class ="card"><div class ="image"><img src="asset/images/winter.gif" alt=""></div><div class = "text"><h1>Winter</h1><p>winter is usually cold and dry weather.The days are shorter and nights are longer</p></div></div></div>`)
}
else if (userInput === "Summer"){
   document.write(`
    <div class="card"><div class ="image"><img src="asset/images/sunny.gif" alt=""></div><div class ="text"><h1>Summer</h1><p>Summer is usually associated with hot,dry weather.The days are longer and the nights are shorter during this season</p></h1></div></div>`)
}
else if (userInput === "Rainy"){
  document.write(`<div class="card"><div class = "image"><img src="asset/images/rainy.gif" alt=""</div><div class ="text"><h1>Rainy</h1><p>It's Rainy Day don't forgate your Umbrella!</p></div></div>`)
}
else if (userInput === "cloudy"){
  document.write(`<div class="card"><div class = "image"><img src="asset/images/cloudt.gif" alt=""</div><div class ="text"><h1>cloudy</h1><p>It's cloudy!</p></div></div>`)
}
else if (userInput === "windy"){
  document.write(`<div class="card"><div class = "imahttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiFkXfs8jqU7Vcy348sR6pvwfyJkVxpFwcA&sge"><img src="asset/images/windy.gif" alt=""</div><div class = "text"<h1>windy</h1><p>It's heavy wind in a city be carefull!</p></div></div>`)
}
else{
  document.write(`<div class="card"><div class = "text"<h1>Sorry</h1><p>SORRY your input in wrong!</p></div></div>`)
  alert("sorry your ans is not match!")
}


// document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/50612/screenshots/2246984/seasons.gif')";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundposition = "center";
// document.body.style.backgroundRepeat = "no-repeat";


