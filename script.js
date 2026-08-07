// =====================================================
// SCAPE STAYCATION - MAIN SCRIPT
// =====================================================


// =====================================================
// 1. BOOKING
// =====================================================

function bookNow() {

  const villaElement = document.getElementById("villa");
  const checkinElement = document.getElementById("checkin");
  const checkoutElement = document.getElementById("checkout");
  const adultsElement = document.getElementById("adults");
  const childrenElement = document.getElementById("children");
  const guestElement = document.getElementById("guest");
  const phoneElement = document.getElementById("phone");


  // Kiểm tra form có tồn tại
  if (!villaElement || !checkinElement || !checkoutElement) {
    alert("Booking form error. Please refresh the page.");
    return;
  }


  // Lấy thông tin khách nhập
  const villa = villaElement.value;
  const checkin = checkinElement.value;
  const checkout = checkoutElement.value;

  const adults = adultsElement ? adultsElement.value : "";
  const children = childrenElement ? childrenElement.value : "";
  const guest = guestElement ? guestElement.value : "";
  const phone = phoneElement ? phoneElement.value : "";


  // Kiểm tra khách đã chọn villa chưa
  if (!villa || villa === "Choose Villa") {
    alert("Please choose a villa.");
    return;
  }


  // Kiểm tra ngày check-in
  if (!checkin) {
    alert("Please select check-in date.");
    return;
  }


  // Kiểm tra ngày check-out
  if (!checkout) {
    alert("Please select check-out date.");
    return;
  }


  // Kiểm tra check-out phải sau check-in
  if (new Date(checkout) <= new Date(checkin)) {
    alert("Check-out date must be after check-in date.");
    return;
  }


  // =====================================================
  // TẠO THÔNG TIN GỬI SANG BOOKING.HTML
  // =====================================================

  const params = new URLSearchParams();

  params.set("villa", villa);
  params.set("check_in", checkin);
  params.set("check_out", checkout);

  params.set("adults", adults || "2");
  params.set("children", children || "0");

  params.set("guest", guest);
  params.set("phone", phone);

  params.set("lang", "en");


  // =====================================================
  // CHUYỂN KHÁCH SANG BOOKING ENGINE
  // =====================================================

  window.location.href =
    "booking.html?" + params.toString();
}



// =====================================================
// 2. SERVICE PRICE
// =====================================================

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



// =====================================================
// 3. UPDATE SERVICE PRICE
// =====================================================

function updateServicePrice() {

  const serviceElement =
    document.getElementById("serviceName");

  const priceElement =
    document.getElementById("servicePrice");


  if (!serviceElement || !priceElement) {
    return;
  }


  const service = serviceElement.value;

  priceElement.innerText =
    getServicePrice(service);
}



// =====================================================
// 4. BOOK SERVICE VIA WHATSAPP
// =====================================================

function bookService() {

  const villaElement =
    document.getElementById("serviceVilla");

  const serviceElement =
    document.getElementById("serviceName");

  const dateElement =
    document.getElementById("serviceDate");

  const timeElement =
    document.getElementById("serviceTime");

  const roomElement =
    document.getElementById("roomNumber");

  const quantityElement =
    document.getElementById("serviceQuantity");

  const phoneElement =
    document.getElementById("servicePhone");

  const extraElement =
    document.getElementById("extraField1");

  const noteElement =
    document.getElementById("serviceNote");


  if (!villaElement || !serviceElement) {
    alert("Service form error.");
    return;
  }


  const villa = villaElement.value;

  const service = serviceElement.value;

  const date =
    dateElement ? dateElement.value : "";

  const time =
    timeElement ? timeElement.value : "";

  const room =
    roomElement ? roomElement.value : "";

  const quantity =
    quantityElement ? quantityElement.value : "";

  const phone =
    phoneElement ? phoneElement.value : "";

  const extra =
    extraElement ? extraElement.value : "";

  const note =
    noteElement ? noteElement.value : "";


  const price =
    getServicePrice(service);


  // =====================================================
  // TẠO NỘI DUNG WHATSAPP
  // =====================================================

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


  // =====================================================
  // GỬI WHATSAPP
  // =====================================================

  const whatsapp =
    "https://wa.me/84333243243?text=" +
    encodeURIComponent(message);


  window.open(
    whatsapp,
    "_blank"
  );
}



// =====================================================
// 5. SET MINIMUM BOOKING DATE
// =====================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const checkin =
      document.getElementById("checkin");

    const checkout =
      document.getElementById("checkout");


    if (!checkin || !checkout) {
      return;
    }


    // Ngày hôm nay
    const today =
      new Date()
        .toISOString()
        .split("T")[0];


    checkin.min = today;


    // Khi chọn check-in
    checkin.addEventListener(
      "change",
      function () {

        if (!checkin.value) {
          return;
        }


        const nextDay =
          new Date(checkin.value);


        nextDay.setDate(
          nextDay.getDate() + 1
        );


        const minimumCheckout =
          nextDay
            .toISOString()
            .split("T")[0];


        checkout.min =
          minimumCheckout;


        // Nếu checkout hiện tại không hợp lệ
        if (
          checkout.value &&
          checkout.value <= checkin.value
        ) {

          checkout.value = "";
        }

      }
    );

  }
);
