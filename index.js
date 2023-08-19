function tile (){
    let sky = document.createElement('img')
    sky.src = 'assets/sky.png'
    sky.style.position = 'fixed'
    sky.style.left = '800px'
    sky.style.bottom = '800px'
    document.body.append(sky)

    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = '0px'
    grass.style.bottom = '0px'
    document.body.append(grass)
}

tile()

// I added this here to at least see the grass and sky code works.






function newImage (){
    
    let greenCharacter = document.createElement('img')
    greenCharacter.src = 'assets/green-character.gif'
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = '100px'
    greenCharacter.style.bottom = '100px'
    document.body.append(greenCharacter)

    let pineTree = document.createElement('img')
    pineTree.src = 'assets/pine-tree.png'
    pineTree.style.position = 'fixed'
    pineTree.style.left = '450px'
    pineTree.style.bottom = '200px'
    document.body.append(pineTree)

    let tree = document.createElement('img')
    tree.src = 'assets/tree.png'
    tree.style.position = 'fixed'
    tree.style.left = '200px'
    tree.style.bottom = '300px'
    document.body.append(tree)

    let pillar = document.createElement('img')
    pillar.src = 'assets/pillar.png'
    pillar.style.position = 'fixed'
    pillar.style.left = '350px'
    pillar.style.bottom = '100px'
    document.body.append(pillar)

    let crate = document.createElement('img')
    crate.src = 'assets/crate.png'
    crate.style.position = 'fixed'
    crate.style.left = '150px'
    crate.style.bottom = '200px'
    document.body.append(crate)

    let well = document.createElement('img')
    well.src = 'assets/well.png'
    well.style.position = 'fixed'
    well.style.left = '500px'
    well.style.bottom = '425px'
    document.body.append(well)
}

function newItem (){
    let sword = document.createElement('img')
    sword.src = 'assets/sword.png'
    sword.style.position = 'fixed'
    sword.style.left = '500px'
    sword.style.bottom = '405px'
    document.body.append(sword)

    sword.addEventListener('dblclick', function(){
        sword.remove()
    })

    let shield = document.createElement('img')
    shield.src = 'assets/shield.png'
    shield.style.position = 'fixed'
    shield.style.left = '165px'
    shield.style.bottom = '185px'
    document.body.append(shield)

    shield.addEventListener('dblclick', function(){
        shield.remove()
    })

    let staff = document.createElement('img')
    staff.src = 'assets/staff.png'
    staff.style.position = 'fixed'
    staff.style.left = '600px'
    staff.style.bottom = '100px'
    document.body.append(staff)

    staff.addEventListener('dblclick', function(){
        staff.remove()
    })
}

newItem()
newImage()

// function newImage(url, left, bottom){
 //   let object = document.createElement('img')
   // object.src = url
   // object.style.position = 'fixed'
   // object.style.left = left + 'px'
   // object.style.bottom = bottom + 'px'
   // document.body.append(object)
   // return object
// }

// function newItem(url, left, bottom){
   // let object = newImage(url, left, bottom)

   // object.addEventListener('dblclick', () => {
      //  object.remove()
   // })
// }

//newImage('assets/green-character.gif', 100, 100)
//newImage('assets/tree.png', 200, 300)
//newImage('assets/pillar.png', 350, 100)
//newImage('assets/pine-tree.png', 450, 200)
//newImage('assets/crate.png', 150, 200)
//newImage('assets/well.png', 500, 425)

//newItem('assets/sword.png', 500, 405)
//newItem('assets/shield.png', 165, 185)
//newItem('assets/staff.png', 600, 100)

// I know we were supposed to set parameters but I wanted to do everything the hard way so I can learn to do it from bottom up but regardless the parameter is there but in comment form.
