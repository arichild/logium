$( document ).ready(function() {
  // cookie
  const cookies = document.querySelector('.cookie')
	const cookiesBtn = document.querySelector('.cookie .ui-btn')
	const isShowedCookies = localStorage.getItem('isShowedCookies')

	if (cookies) {
		if (!isShowedCookies) cookies.classList.add('active')

		if (cookiesBtn) {
			cookiesBtn.addEventListener('click', e => {
				e.preventDefault()

				cookies.classList.remove('active')
				localStorage.setItem('isShowedCookies', 1)
			})
		}
	}

  // search
  const $input = $('.header-search input[type="text"]');
  const $result = $('.result');
  const $resultBody = $('.result-body');
  const $resultWrapper = $('.header-search-wrapper');
  const $html = $('html');
  const btn = $('.header-search-btn.clear')
  const search = $('.header-search input')

  search.on('input', function() {
    let value = $(this).val()

    if (value === '') {
      btn.removeClass('active')
    } else {
      btn.addClass('active')
    }
  });

  btn.on('click', (e) => {
    e.preventDefault();

    search.val('')

    if (search.val() === '') {
      btn.removeClass('active')
    } else {
      btn.addClass('active')
    }
  });

  $input.on('input', function () {
    const value = $(this).val();

    if (value.length >= 2) {
      const items = $result.find('.result-item').length;

      if (items > 0) {
        $result.addClass('active');
        $resultBody.addClass('active');
        $resultWrapper.addClass('active');
        $html.addClass('active');
      } else {
        $result.addClass('active empty');
        $resultBody.removeClass('active');
        $resultWrapper.addClass('active');
        $html.addClass('active');
      }
    } else {
      $result.removeClass('active');
      $resultBody.removeClass('active');
      $resultWrapper.removeClass('active');
      $html.removeClass('active');
    }
  });

  // $input.on('input', function () {
  //   const value = $(this).val();

  //   if (value.length >= 2) {
  //     $.ajax({
  //       url: '/search', // условный url
  //       method: 'GET',
  //       data: { query: value },
  //       success: function (data) {
  //         if (data.items.length > 0) {
  //           const result = data.items.map(item => `
  //             <a href="#" class="result-item">
  //               <div class="result-item-img">
  //                 <img loading="lazy" src="${item.img}" alt="">
  //               </div>
  //               <div class="result-item-title">${item.title}</div>
  //             </a>
  //           `).join('');
  //           $result.find('.result-content').html(result);


  //           $result.removeClass('empty').addClass('active');
  //           $resultBody.addClass('active');
  //           $resultWrapper.addClass('active');
  //           $html.addClass('active');
  //         } else {
  //           $result.addClass('active empty');
  //           $resultBody.removeClass('active');
  //           $resultWrapper.addClass('active');
  //           $html.addClass('active');
  //         }
  //       }
  //     });
  //   } else {
  //     $result.removeClass('active empty');
  //     $resultBody.removeClass('active');
  //     $resultWrapper.removeClass('active');
  //     $html.removeClass('active');
  //   }
  // });

  $(document).on('click', function (e) {
    const $headerSearch = $('.header-search');

    if (!$headerSearch.is(e.target) && $headerSearch.has(e.target).length === 0) {
      $result.removeClass('active');
      $resultBody.removeClass('active');
      $resultWrapper.removeClass('active');
      $html.removeClass('active');
    }
  });

  // copyright
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // header
  const $header = $('.header');
  const stickyOffset = $header.offset().top;

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > stickyOffset) {
      $header.addClass('sticky');
    } else {
      $header.removeClass('sticky');
    }
  });
});
