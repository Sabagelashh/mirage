// Redirect to the specified URL
function goToPage(url) {
  window.location.href = url;
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

// product filter categories
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".child-categories > div").forEach((toggle) => {
    toggle.addEventListener("click", function () {
      let parent = this.parentElement;
      let ul = parent.querySelector("ul"); 
      this.classList.toggle('visible');

      document.querySelectorAll(".child-categories ul").forEach((el) => {
        if (el !== ul) el.classList.remove("visible");
      });

      ul.classList.toggle("visible");
    });
  });
});


// latest product radio buttons
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(".product-status-select input[type='radio']");
  
  function updateActiveLabel() {
    document.querySelectorAll(".product-status-select label").forEach(label => {
      label.classList.remove("active");
    });

    const checkedRadio = document.querySelector(".product-status-select input[type='radio']:checked");
    if (checkedRadio) {
      const label = document.querySelector(`label[for="${checkedRadio.id}"]`);
      if (label) label.classList.add("active");
    }
  }

  updateActiveLabel();

  radioButtons.forEach(radio => {
    radio.addEventListener("change", updateActiveLabel);
  });
});


// increase/decrease item quantity
document.addEventListener('DOMContentLoaded', () => {
  const increaseButtons = document.querySelectorAll('.cart-increase');
  const decreaseButtons = document.querySelectorAll('.cart-decrease');

  increaseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const quantitySpan = button.previousElementSibling;
      let currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
    });
  });

  decreaseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const quantitySpan = button.nextElementSibling;
      let currentQuantity = parseInt(quantitySpan.textContent);
      if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
      }
    });
  });
});


// show description content on mobile
document.addEventListener("DOMContentLoaded", function() {
  const descItem = document.querySelectorAll('.description-item');

  descItem.forEach(item => {
    item.addEventListener('click', function (e) {
      if (!e.target.classList.contains('desc-content')) {
        this.classList.toggle('show');

        const contentHidden = this.querySelector('.desc-container');
        const content = this.querySelector('.desc-cont');

        if (contentHidden.style.height === '0px' || contentHidden.style.height === '') {
          contentHidden.style.height = content.clientHeight + 'px';
        } else {
          contentHidden.style.height = '0px';
        }
      }
    });

    const descContent = item.querySelector('.desc-cont');
    if (descContent) {
      descContent.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });
});


// faq show answers
document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', function (e) {
      // Ensure that clicking the content itself does not trigger the show
      if (!e.target.classList.contains('answer-content')) {
        this.classList.toggle('show');

        const contentHidden = this.querySelector('.answer');
        const content = this.querySelector('.answer-content');
        const plusIcon = this.querySelector('.toggle-icon.plus');
        const minusIcon = this.querySelector('.toggle-icon.minus');

        // Check the current height of the hidden content
        if (contentHidden.style.height === '0px' || contentHidden.style.height === '') {
          // If the height is 0 or not set, expand the hidden content
          contentHidden.style.height = content.clientHeight + 'px';
          plusIcon.style.display = 'none';
          minusIcon.style.display = 'inline-block';
        } else {
          // Otherwise, collapse the hidden content
          contentHidden.style.height = '0px';
          plusIcon.style.display = 'inline-block';
          minusIcon.style.display = 'none';
        }
      }
    });
  });
});


// toggle password visibility
function togglePasswordVisibility(inputId, eyeIcon) {
  const passwordInput = document.getElementById(inputId);
  const eyeIconImg = eyeIcon.querySelector('img');

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIconImg.src =  './assets/images/eye-fill.svg';
  } else {
    passwordInput.type = "password";
    eyeIconImg.src = './assets/images/eye-slash-fill.svg';
  }
}


// toggle delivery options
document.addEventListener("DOMContentLoaded", () => {
  const transportation1 = document.getElementById('transportation1');
  const transportation2 = document.getElementById('transportation2');
  const companyDelivery = document.querySelector('.company-delivery');

  const toggleDeliveryOptions = () => {
    if (transportation1.checked) {
      companyDelivery.classList.add('hidden');
    } else if (transportation2.checked) {
      companyDelivery.classList.remove('hidden');
    }
  };

  if (transportation1 && transportation2) {
    // Attach event listeners to the radio buttons
    transportation1.addEventListener('change', toggleDeliveryOptions);
    transportation2.addEventListener('change', toggleDeliveryOptions);

    toggleDeliveryOptions();
  }
});


// get the address
document.addEventListener("DOMContentLoaded", function() {
  const addressSelect = document.getElementById("addressSelect");
  const selectNewAddress = document.querySelector('.select-new-address');
  const newAddress = document.getElementById("new-address");
  const saveaddress = document.getElementById("save-address");

  if (!addressSelect || !selectNewAddress || !newAddress) {
    return;
  }

  newAddress.removeAttribute('required');

  addressSelect.addEventListener("change", function() {
    const selectedOptionIndex = addressSelect.selectedIndex;
    const isLastOption = selectedOptionIndex === addressSelect.options.length - 1;
    
    if (isLastOption) {
      selectNewAddress.classList.remove('hidden');
      saveaddress.classList.remove('hidden');
      newAddress.setAttribute('required', 'required');
    } else {
      selectNewAddress.classList.add('hidden');
      saveaddress.classList.add('hidden');
      newAddress.removeAttribute('required');
    }
 });
});


$(document).ready(function() {
  $('.product-select').select2({
    minimumResultsForSearch: Infinity,
  });
});

// // Image zoom in
// var $loupe = $(".loupe"),
//   loupeWidth = 150, // Adjusted loupe width
//   loupeHeight = 150; // Adjusted loupe height

// $loupe.width(loupeWidth);
// $loupe.height(loupeHeight);

// $(document).on("mouseenter", ".image", function (e) {
//   var $currImage = $(this),
//     $img = $('<img/>')
//       .attr('src', $('img', this).attr("src"))
//       .css({ 
//         'width': $currImage.width() * 1.5, // Adjusted zoom scale
//         'height': $currImage.height() * 1.5, // Adjusted zoom scale
//         'image-rendering': 'auto' // Ensure smooth rendering
//       });

//   $loupe.html($img).fadeIn(100);
    
//   $(document).on("mousemove", moveHandler);
                   
//   function moveHandler(e) {
//     var imageOffset = $currImage.offset(),
//       fx = imageOffset.left - loupeWidth / 2,
//       fy = imageOffset.top - loupeHeight / 2,
//       fh = imageOffset.top + $currImage.height() + loupeHeight / 2,
//       fw = imageOffset.left + $currImage.width() + loupeWidth / 2;
        
//     $loupe.css({
//       'left': e.pageX - loupeWidth / 2,
//       'top': e.pageY - loupeHeight / 2
//     });

//     var loupeOffset = $loupe.offset(),
//       lx = loupeOffset.left,
//       ly = loupeOffset.top,
//       lw = lx + loupeWidth,
//       lh = ly + loupeHeight,
//       bigy = (ly - loupeHeight / 4 - fy) * 1.5, // Adjusted zoom factor
//       bigx = (lx - loupeWidth / 4 - fx) * 1.5; // Adjusted zoom factor

//     $img.css({ 'left': -bigx, 'top': -bigy });

//     if (lx < fx || lh > fh || ly < fy || lw > fw) {
//       $img.remove();
//       $(document).off("mousemove", moveHandler);
//       $loupe.fadeOut(100);
//     }
//   }
// });