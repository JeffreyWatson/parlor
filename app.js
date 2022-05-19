const iceCream = [{ name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 3 }, { name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 3.25 }, { name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 3.75 }]

const vessels = [{ name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 3 }, { name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4.75 }, { name: 'Ice Cream Bowl', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500', price: 6.25 }]

const toppings = [{ name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 }, { name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2.57 }, { name: 'Skittles', image: 'https://images.unsplash.com/photo-1600359738432-965e50c4d89e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpdHRsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500', price: 3.75 }]

const order = []


function drawMenu1() {
  let template = ''
  iceCream.forEach(item => {
    template += `
              <div class="col-4">
            <div class="bg-dark text-success shadow rounded ice-cream-card" onclick="addToOrder('${item.name}')">
              <img class="w-100 object-cover rounded-top" height="200px" src="${item.image}" alt="">
              <div class="d-flex justify-content-between p-3">
                <h4>${item.name}</h4>
                <h4><em>${item.price.toFixed(2)}</em></h4>
              </div>
            </div>
          </div>
    `
  });

  document.getElementById('menuIceCream').innerHTML = template
}

function drawMenu2() {
  let template = ''
  vessels.forEach(item => {
    template += `
              <div class="col-4">
            <div class="bg-dark text-success shadow rounded ice-cream-card" onclick="addToOrder('${item.name}')">
              <img class="w-100 object-cover rounded-top" height="200px" src="${item.image}" alt="">
              <div class="d-flex justify-content-between p-3">
                <h4>${item.name}</h4>
                <h4><em>${item.price.toFixed(2)}</em></h4>
              </div>
            </div>
          </div>
    `
  });

  document.getElementById('menuVessels').innerHTML = template
}

function drawMenu3() {
  let template = ''
  toppings.forEach(item => {
    template += `
              <div class="col-4">
            <div class="bg-dark text-success shadow rounded ice-cream-card" onclick="addToOrder('${item.name}')">
              <img class="w-100 object-cover rounded-top" height="200px" src="${item.image}" alt="">
              <div class="d-flex justify-content-between p-3">
                <h4>${item.name}</h4>
                <h4><em>${item.price.toFixed(2)}</em></h4>
              </div>
            </div>
          </div>
    `
  });

  document.getElementById('menuToppings').innerHTML = template
}

function drawOrder() {
  let template = ''
  let total = 0
  // REVIEW I'm not sure what exactly this => does and what a forEach is
  order.forEach(item => {
    total += item.price
    template += `
              <li class="d-flex justify-content-between border-bottom border-secondary">
                <p class="m-1">${item.name}</p>
                <p class="m-1">$${item.price.toFixed(2)}</p>
              </li>
    `
  });

  template = template || '<p><em>No Items In The Cart</em></p>'

  document.getElementById('total').innerText = total.toFixed(2)
  document.getElementById('orderList').innerHTML = template
}
// REVIEW is there a way to consolidate functions with essentially the same process like below where the only difference with the next 3 functions is just the !const!
// REVIEW exactly what does find accomplish and when to correctly implement it. 
// Reminder to understand why [..., ..., ...] allows me to access multiple arrays and what it is called.
function addToOrder(name) {
  let allItems = [...iceCream, ...vessels, ...toppings]
  let found = allItems.find(item => item.name == name)
  console.log(name);
  if (found) {
    console.log(found)
    order.push(found)
    drawOrder()
  }
}

function checkOut() {
  order.length = 0
  drawOrder()
  document.getElementById('checkout-button')
}

// These were functions that were in use prior to consolidated code.

// function addToOrder2(name) {
//   let found = vessels.find(item => item.name == name)
//   console.log(name);
//   if (found) {
//     console.log(found)
//     order.push(found)
//     drawOrder()
//   }
// }

// function addToOrder3(name) {
//   let found = toppings.find(item => item.name == name)
//   console.log(name);
//   if (found) {
//     console.log(found)
//     order.push(found)
//     drawOrder()
//   }
// }


drawMenu1()
drawMenu2()
drawMenu3()
drawOrder()