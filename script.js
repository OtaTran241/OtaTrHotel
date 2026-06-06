const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const roomData = {
  standard: {
    title: "Standard Room",
    image: "images/Ảnh phòng 1.png",
    meta: ["24m²", "1-2 người", "Buffet sáng"],
    description:
      "Phòng Standard là lựa chọn lý tưởng dành cho khách du lịch cá nhân, khách công tác hoặc những ai mong muốn một không gian nghỉ ngơi tiện nghi với chi phí hợp lý. Căn phòng được thiết kế hiện đại, tối giản nhưng vẫn đảm bảo sự thoải mái trong suốt thời gian lưu trú.",
    amenities: [
      "Giường đôi / giường đơn",
      "Tivi màn hình phẳng",
      "Máy lạnh",
      "Wi-Fi miễn phí",
      "Phòng tắm riêng",
      "Vòi sen",
      "Máy sấy tóc",
      "Bàn làm việc",
      "Ấm đun siêu tốc",
      "Cà phê và trà miễn phí",
      "Nước uống miễn phí",
      "Điện thoại nội bộ",
      "Dép đi trong phòng",
      "Chìa khóa phòng điện tử",
      "Buffet sáng",
      "Áo choàng tắm",
    ],
  },
  deluxe: {
    title: "Superior Room",
    image: "images/Ảnh phòng 2.png",
    meta: ["32m²", "2 người", "City view"],
    description:
      "Phòng Deluxe mở rộng trải nghiệm nghỉ dưỡng với diện tích thoải mái, ánh sáng tự nhiên và đầy đủ tiện nghi cho khách đi công tác hoặc du lịch cặp đôi.",
    amenities: [
      "Giường đôi lớn",
      "Khu làm việc",
      "Wi-Fi miễn phí",
      "Tivi màn hình phẳng",
      "Máy lạnh",
      "Phòng tắm riêng",
      "Trà cà phê miễn phí",
      "Buffet sáng",
    ],
  },
  premier: {
    title: "Premier Deluxe",
    image: "images/Ảnh phòng 3.png",
    meta: ["36m²", "2 người", "Không gian cao cấp"],
    description:
      "Premier Deluxe được hoàn thiện với chất liệu ấm áp, bố cục gọn và khu vực thư giãn riêng, phù hợp cho khách cần một căn phòng chỉn chu hơn.",
    amenities: [
      "Giường đôi cao cấp",
      "Ghế thư giãn",
      "Bàn làm việc",
      "Wi-Fi miễn phí",
      "Máy lạnh",
      "Phòng tắm riêng",
      "Nước uống miễn phí",
      "Buffet sáng",
    ],
  },
  suite: {
    title: "Suite Room",
    image: "images/Ảnh phòng 5.png",
    meta: ["48m²", "2-3 người", "Living corner"],
    description:
      "Suite Room có thêm không gian tiếp khách, phòng tắm rộng và tầm nhìn mở, dành cho kỳ nghỉ đặc biệt hoặc những chuyến lưu trú dài ngày.",
    amenities: [
      "Giường đôi cao cấp",
      "Không gian tiếp khách",
      "Bồn tắm thư giãn",
      "Wi-Fi miễn phí",
      "Tivi màn hình phẳng",
      "Mini bar",
      "Trà cà phê miễn phí",
      "Buffet sáng",
    ],
  },
  family: {
    title: "Family Room",
    image: "images/Ảnh phòng 4.png",
    meta: ["58m²", "3-4 người", "Family stay"],
    description:
      "Family Room dành cho gia đình hoặc nhóm bạn, có bố cục linh hoạt, tiện nghi đầy đủ và thêm sự riêng tư cho từng thành viên.",
    amenities: [
      "Giường đôi và giường phụ",
      "Không gian sinh hoạt",
      "Wi-Fi miễn phí",
      "Tivi màn hình phẳng",
      "Máy lạnh",
      "Phòng tắm riêng",
      "Nước uống miễn phí",
      "Buffet sáng",
    ],
  },
};

const blogData = {
  travel: {
    title: "Cẩm nang nghỉ dưỡng tại Vũng Tàu",
    image: "images/cam-nang-du-lich.png",
    copy:
      "Một kỳ nghỉ nhẹ nhàng thường bắt đầu từ lịch trình vừa đủ: dành thời gian nghỉ ở khách sạn, chọn vài điểm tham quan gần nơi lưu trú và giữ khoảng trống cho spa, hồ bơi hoặc một bữa tối chậm rãi.",
  },
  wedding: {
    title: "Checklist tổ chức tiệc cưới",
    image: "images/Ảnh Xem Thêm Hội Nghị - Tiệc Cưới.png",
    copy:
      "Khi chuẩn bị tiệc cưới, hãy chốt sớm số khách dự kiến, phong cách trang trí, timeline nghi lễ, thực đơn và yêu cầu âm thanh ánh sáng. Đội ngũ OtaTr có thể đồng hành từ buổi tư vấn đầu tiên đến khi kết thúc tiệc.",
  },
  room: {
    title: "Bí quyết chọn phòng phù hợp",
    image: "images/Ảnh phòng 5.png",
    copy:
      "Khách đi công tác nên ưu tiên bàn làm việc và Wi-Fi ổn định. Gia đình hoặc nhóm bạn nên chọn phòng rộng hơn, có thêm không gian sinh hoạt để kỳ lưu trú riêng tư và thoải mái.",
  },
};

const modal = $("[data-modal]");
const modalContent = $("[data-modal-content]");
const toast = $("[data-toast]");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function openModal(html) {
  modalContent.innerHTML = html;
  modal.hidden = false;
  document.body.classList.add("is-locked");
  const closeButton = $("[data-modal-close]", modal);
  closeButton?.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("is-locked");
}

$$("[data-modal-close]").forEach((button) => button.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

function initHeader() {
  const header = $(".site-header");
  const menuToggle = $(".menu-toggle");
  const menu = $("#primary-menu");

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("a", menu).forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initHero() {
  const slides = $$("[data-hero] .hero__slide");
  const dotsWrap = $("[data-hero-dots]");
  const prev = $("[data-hero-prev]");
  const next = $("[data-hero-next]");
  let current = 0;
  let timer;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Chuyển đến slide ${index + 1}`);
    dot.addEventListener("click", () => show(index));
    dotsWrap.append(dot);
  });

  const dots = $$("button", dotsWrap);

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === current));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === current));
    restart();
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => show(current + 1), 6500);
  }

  prev.addEventListener("click", () => show(current - 1));
  next.addEventListener("click", () => show(current + 1));
  show(0);
}

function initDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const toDate = (date) => date.toISOString().slice(0, 10);

  $$('input[type="date"]').forEach((input) => {
    input.min = toDate(today);
  });

  const checkin = $('[name="checkin"]');
  const checkout = $('[name="checkout"]');
  const eventDate = $('[name="eventDate"]');

  if (checkin && checkout) {
    checkin.value = toDate(today);
    checkout.value = toDate(tomorrow);
    checkin.addEventListener("change", () => {
      const minCheckout = new Date(checkin.value);
      minCheckout.setDate(minCheckout.getDate() + 1);
      checkout.min = toDate(minCheckout);
      if (checkout.value <= checkin.value) checkout.value = toDate(minCheckout);
    });
    checkin.dispatchEvent(new Event("change"));
  }

  if (eventDate) eventDate.value = toDate(tomorrow);
}

function initBooking() {
  const form = $("[data-booking-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.checkout <= data.checkin) {
      showToast("Ngày trả phòng cần sau ngày nhận phòng.");
      return;
    }

    openModal(`
      <h2 id="modal-title">Yêu cầu đặt phòng</h2>
      <p>OtaTr đã ghi nhận thông tin tìm phòng của bạn. Đây là bản front-end demo, bước gửi sẽ hiển thị xác nhận ngay trên giao diện.</p>
      <ul class="modal__meta">
        <li>Nhận phòng: ${data.checkin}</li>
        <li>Trả phòng: ${data.checkout}</li>
        <li>Người lớn: ${data.adults}</li>
        <li>Trẻ em: ${data.children}</li>
      </ul>
      <button class="button" type="button" data-confirm-demo>Gửi yêu cầu tư vấn</button>
    `);

    $("[data-confirm-demo]", modal).addEventListener("click", () => {
      closeModal();
      showToast("Cảm ơn bạn. Bộ phận đặt phòng sẽ liên hệ lại trong thời gian sớm nhất.");
    });
  });
}

function initRoomFilters() {
  const buttons = $$("[data-room-filter]");
  const cards = $$("[data-room-card]");

  function filter(category) {
    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.roomFilter === category);
    });
    cards.forEach((card) => {
      const visible =
        category === "all" || card.dataset.category === category || card.dataset.category === "all";
      card.hidden = !visible;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => filter(button.dataset.roomFilter));
  });

  $$("[data-room-link]").forEach((link) => {
    link.addEventListener("click", () => {
      const key = link.dataset.roomLink;
      const category = key === "standard" ? "standard" : key === "suite" || key === "family" ? "suite" : "deluxe";
      filter(category);
    });
  });

  $$("[data-room-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const room = roomData[button.dataset.roomModal];
      openModal(`
        <img src="${room.image}" alt="${room.title}" />
        <h2 id="modal-title">${room.title}</h2>
        <ul class="modal__meta">${room.meta.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p>${room.description}</p>
        <h3>Tiện ích & tiện nghi</h3>
        <ul class="amenity-list">${room.amenities.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p><a class="button" href="#booking" data-modal-book>Đặt phòng này</a></p>
      `);
      $("[data-modal-book]", modal).addEventListener("click", closeModal);
    });
  });
}

function initForms() {
  const eventForm = $("[data-event-form]");
  const contactForm = $("[data-contact-form]");
  const newsletterForm = $("[data-newsletter-form]");
  const languageToggle = $(".language-toggle");

  eventForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(eventForm).entries());
    showToast(`Đã nhận yêu cầu ${data.type} cho ${data.guests} khách.`);
    eventForm.reset();
    initDates();
  });

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    showToast(`Cảm ơn ${data.name}. OtaTr sẽ liên hệ lại qua số ${data.phone}.`);
    contactForm.reset();
  });

  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(newsletterForm).get("email");
    showToast(`Email ${email} đã được thêm vào danh sách nhận tin.`);
    newsletterForm.reset();
  });

  languageToggle?.addEventListener("click", () => {
    showToast("Bản demo đã sẵn sàng giao diện đổi ngôn ngữ. Nội dung hiện ưu tiên tiếng Việt theo tài liệu local.");
  });
}

function initSpaTabs() {
  const showcase = $(".feature-showcase > img");
  const copy = $(".feature-showcase p");
  const tabs = $$("[data-service-tab]");
  const data = {
    spa1: {
      image: "images/ẢNH QUẦY SPA.png",
      copy:
        "Các liệu trình chăm sóc cơ thể được thiết kế để mang lại cảm giác thư thái, nhẹ nhõm và cân bằng. Không gian spa sử dụng ánh sáng ấm, mùi hương dịu và phong cách phục vụ kín đáo.",
    },
    spa2: {
      image: "images/ẢNH SPA OTA 4.png",
      copy:
        "Dịch vụ chăm sóc cơ thể tập trung vào sự thư giãn sâu, giúp khách lưu trú phục hồi năng lượng sau hành trình dài hoặc lịch làm việc dày.",
    },
    spa3: {
      image: "images/ẢNH SPA OTATR 2.png",
      copy:
        "Các liệu trình chuyên sâu được tư vấn theo nhu cầu cá nhân, phù hợp cho khách cần chăm sóc sức khỏe, sắc đẹp và tinh thần trong cùng một trải nghiệm.",
    },
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      const item = data[tab.dataset.serviceTab];
      showcase.src = item.image;
      copy.textContent = item.copy;
    });
  });
}

function initGallery() {
  const filters = $$("[data-gallery-filter]");
  const items = $$("[data-gallery-item]");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.galleryFilter;
      filters.forEach((filter) => filter.classList.toggle("is-active", filter === button));
      items.forEach((item) => {
        item.hidden = category !== "all" && item.dataset.category !== category;
      });
    });
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const image = $("img", item);
      openModal(`<img src="${item.dataset.full}" alt="${image.alt}" /><h2 id="modal-title">${image.alt}</h2>`);
    });
  });
}

function initDiningCarousel() {
  const items = $$(".dining-carousel__item");
  if (!items.length) return;

  let current = Math.max(
    0,
    items.findIndex((item) => item.classList.contains("is-center")),
  );

  function render() {
    items.forEach((item, index) => {
      const offset = (index - current + items.length) % items.length;
      item.classList.remove("is-left", "is-center", "is-right", "is-hidden");

      if (offset === 0) item.classList.add("is-center");
      else if (offset === 1) item.classList.add("is-right");
      else if (offset === items.length - 1) item.classList.add("is-left");
      else item.classList.add("is-hidden");
    });
  }

  render();
  setInterval(() => {
    current = (current + 1) % items.length;
    render();
  }, 3200);
}

function initPromoPopup() {
  setTimeout(() => {
    if (!modal.hidden) return;

    openModal(`
      <div class="promo-popup">
        <img src="images/anh-quang-cao-1-email.png" alt="Ưu đãi đặc biệt OtaTr Hotel" />
        <h2 id="modal-title">Ưu đãi đặc biệt</h2>
        <p>Khám phá chương trình ưu đãi nổi bật đang được áp dụng tại OtaTr Hotel.</p>
        <div class="promo-popup__actions">
          <a class="button" href="#offers" data-modal-book>Xem ưu đãi</a>
          <button class="button button--light" type="button" data-modal-close>Đóng</button>
        </div>
      </div>
    `);

    $$("[data-modal-close]", modal).forEach((button) => button.addEventListener("click", closeModal));
    $("[data-modal-book]", modal).addEventListener("click", closeModal);
  }, 650);
}

function initImageLoading() {
  $$("img").forEach((image) => {
    image.decoding = image.decoding || "async";
    if (!image.hasAttribute("loading") && image.getAttribute("fetchpriority") !== "high") {
      image.loading = "lazy";
    }
  });
}

function initBlog() {
  $$("[data-blog-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const post = blogData[button.dataset.blogModal];
      openModal(`
        <img src="${post.image}" alt="${post.title}" />
        <h2 id="modal-title">${post.title}</h2>
        <p>${post.copy}</p>
        <p><a class="button" href="#contact" data-modal-book>Liên hệ tư vấn</a></p>
      `);
      $("[data-modal-book]", modal).addEventListener("click", closeModal);
    });
  });
}

function initReviews() {
  const reviews = $$(".review-card");
  const prev = $("[data-review-prev]");
  const next = $("[data-review-next]");
  let current = 0;

  function show(index) {
    current = (index + reviews.length) % reviews.length;
    reviews.forEach((review, reviewIndex) => review.classList.toggle("is-active", reviewIndex === current));
  }

  prev?.addEventListener("click", () => show(current - 1));
  next?.addEventListener("click", () => show(current + 1));
  setInterval(() => show(current + 1), 7000);
}

function initReveal() {
  const elements = $$(".section, .booking-panel, .explore-card, .room-card, .event-card");
  if (!("IntersectionObserver" in window)) return;

  elements.forEach((element) => element.classList.add("reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initHero();
  initDates();
  initBooking();
  initRoomFilters();
  initForms();
  initSpaTabs();
  initGallery();
  initDiningCarousel();
  initBlog();
  initReviews();
  initReveal();
  initImageLoading();
  initPromoPopup();
});
