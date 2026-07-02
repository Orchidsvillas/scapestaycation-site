function bookNow() {

  let villa = document.getElementById("villa").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let adults = document.getElementById("adults").value;
  let children = document.getElementById("children").value;
  let guest = document.getElementById("guest").value;
  let phone = document.getElementById("phone").value;

  let message =
`SCAPE STAYCATION BOOKING

Villa: ${villa}

Check in: ${checkin}
Check out: ${checkout}

Adults: ${adults}
Children: ${children}

Guest Name: ${guest}

Phone: ${phone}`;

  let whatsapp =
"https://wa.me/84333243243?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}
function getServicePrice(service) {
  const prices = {
    "Motorbike Rental": "150,000 VND / day",
    "Car Rental": "2,000,000 VND",
    "Ba Na Hills Tickets": "1,200,000 VND / pax",
    "Coconut Forest Tickets": "450,000 VND / pax",
    "Cham Island Tour": "1,000,000 VND / pax",
    "Airport Pickup": "300,000 VND",
    "Airport Drop-off": "300,000 VND",
    "Housekeeping Service": "Free",
    "Towel Replacement": "Free"
  };

  return prices[service] || "Please choose a service";
}

function updateServicePrice() {
  let service = document.getElementById("serviceName").value;
  document.getElementById("servicePrice").innerText = getServicePrice(service);
}

function bookService() {
  let villa = document.getElementById("serviceVilla").value;
  let service = document.getElementById("serviceName").value;
  let date = document.getElementById("serviceDate").value;
  let time = document.getElementById("serviceTime").value;
  let room = document.getElementById("roomNumber").value;
  let quantity = document.getElementById("serviceQuantity").value;
  let phone = document.getElementById("servicePhone").value;
  let extra = document.getElementById("extraField1").value;
  let note = document.getElementById("serviceNote").value;
  let price = getServicePrice(service);

  let message =
`SCAPE STAYCATION SERVICE REQUEST

Villa: ${villa}
Service: ${service}
Price: ${price}
Date: ${date}
Time: ${time}
Room number: ${room}
Quantity / Guests / Rental Days: ${quantity}
Phone: ${phone}
Extra information: ${extra}
Note: ${note}`;

  let whatsapp =
"https://wa.me/84333243243?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}
