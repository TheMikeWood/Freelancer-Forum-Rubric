const initialFreelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

const newFreelancers = [
  { name: "Carol", occupation: "Programmer", price: 70 },
  { name: "David", occupation: "Graphic Designer", price: 40 },
  { name: "Ella", occupation: "Photographer", price: 60 },
  { name: "Frank", occupation: "Therapist", price: 80 },
  { name: "Alice", occupation: "Graphic Editor", price: 50 },
  { name: "William", occupation: "Web Developer", price: 100 },
  { name: "Charlie", occupation: "Content Writer", price: 30 },
  { name: "Diana", occupation: "Digital Marketer", price: 80 },
  { name: "Ethan", occupation: "Therapist", price: 70 },
];

let freelancers = [...initialFreelancers];

function updateAveragePrice() {
  const averagePrice = (
    freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0) /
    freelancers.length
  ).toFixed(2);

  document.getElementById(
    "averagePrice"
  ).textContent = `Average Starting Price: $${averagePrice}`;
}

function render() {
  const ul = document.getElementById("freelancerList");
  ul.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${freelancer.name} - ${freelancer.occupation}</span> <span>$${freelancer.price}</span>`;
    ul.appendChild(li);
  });
  updateAveragePrice();
}

function addFreelancer() {
  if (newFreelancers.length > 0) {
    let freelancer;
    if (freelancers.some((f) => f.name === "Carol")) {
      const randomIndex = Math.floor(Math.random() * newFreelancers.length);
      freelancer = newFreelancers.splice(randomIndex, 1)[0];
    } else {
      freelancer = newFreelancers.shift();
    }
    freelancers.push(freelancer);
    render();
  }
}

render();
setInterval(addFreelancer, 3000);
