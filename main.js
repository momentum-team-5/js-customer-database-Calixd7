
let customer = {
    name: '',
    location: '',
    phone: '',
    picture: '',
    dob: ''
}
let filteredNames = []
for (let customer of customers){
let landingZone = document.querySelector('.customer')
let list = document.createElement('ul')
landingZone.appendChild(list)
console.log(list)
let listItem = document.createElement('li')
list.appendChild(listItem)
console.log(listItem)
let imgCustomer = document.createElement('img')
imgCustomer.src = customer.picture.thumbnail
console.log(imgCustomer)
listItem.appendChild(imgCustomer)
let nameTitle = document.createElement('h3')
nameTitle.innerText = customer.name.first + customer.name.last
listItem.appendChild(nameTitle)
console.log(nameTitle)
let email = document.createElement('h5')
email.innerText = customer.email
listItem.appendChild(email)
console.log(email)
let address = document.createElement('p')
address.innerText = customer.location.street + customer.location.city + customer.location.state + customer.location.postcode
listItem.appendChild(address)
console.log(address)
let dob = document.createElement('p')
dob.innerText = customer.dob
listItem.appendChild(dob)
console.log(dob)
let tenure = document.createElement('p')
tenure.innerText = "Customer since: " + customer.registered
listItem.appendChild(tenure)
console.log(tenure) 
}




