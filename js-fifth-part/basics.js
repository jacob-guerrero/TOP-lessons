//Object basics 1
const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
}
  
// Put your code here
let catName = cat['name'];
cat.greeting();
cat.color = 'black';
// Don't edit the code below here


//Object basics 2
const band = {
    name: "Heroes del Silencio",
    nationality: "Spain",
    genre: "Rock",
    members: 4,
    formed: 1984,
    split: 1996,
    albums: [{
        name: 'Senderos de traicion',
        released: 1990    
    },{
        name: 'Avalancha',
        released: 1995
    }],
}

let bandInfo = `The band ${band.name} was a group formed in ${band.nationality}, they are considered to be one of the most popular bands in ${band.genre} genre. They were active from ${band.formed} to ${band.split}. They started to be popular with their first album called ${band.albums[0].name} released in ${band.albums[0]['released']}`;