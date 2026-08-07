function bookNow() {
  const villa = document.getElementById("villa").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;
  const guest = document.getElementById("guest").value;
  const phone = document.getElementById("phone").value;

  if (!checkin || !checkout) {
    alert("Please select check-in and check-out dates.");
    return;
  }

  const params = new URLSearchParams({
    villa: villa,
    check_in: checkin,
    check_out: checkout,
    adults: adults || "2",
    children: children || "0",
    guest: guest || "",
    phone: phone || "",
    lang: "en"
  });

  window.location.href = "booking.html?" + params.toString();
  }

  // CÁC VILLA KHÁC -> WHATSAPP
  const message =
`SCAPE STAYCATION BOOKING

Villa: ${villa}

Check in: ${checkin}
Check out: ${checkout}

Adults: ${adults}
Children: ${children}

Guest Name: ${guest}

Phone: ${phone}`;

  const whatsapp =
    "https://wa.me/84333243243?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}


// ===============================
// SERVICE PAGE
// ===============================

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
  const service = document.getElementById("serviceName").value;
  document.getElementById("servicePrice").innerText =
    getServicePrice(service);
}


function bookService() {
  const villa = document.getElementById("serviceVilla").value;
  const service = document.getElementById("serviceName").value;
  const date = document.getElementById("serviceDate").value;
  const time = document.getElementById("serviceTime").value;
  const room = document.getElementById("roomNumber").value;
  const quantity = document.getElementById("serviceQuantity").value;
  const phone = document.getElementById("servicePhone").value;
  const extra = document.getElementById("extraField1").value;
  const note = document.getElementById("serviceNote").value;
  const price = getServicePrice(service);

  const message =
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

  const whatsapp =
    "https://wa.me/84333243243?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}
