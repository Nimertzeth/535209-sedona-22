
            function showMenu(){
                document.getElementById("menu-list1").classList.remove('menu__element--hidden');
                document.getElementById("menu-list2").classList.remove('menu__element--hidden');
                document.getElementById("menu-list3").classList.remove('menu__element--hidden');
                document.getElementById("menu-list4").classList.remove('menu__element--hidden');
                document.getElementById("menu-picture").classList.add('menu__element--hidden');
                document.getElementById("button-open-menu").classList.add('menu__button--close');
                document.getElementById("button-close-menu").classList.remove('menu__button--close');
              }
            function closeMenu(){
                document.getElementById("menu-list1").classList.add('menu__element--hidden');
                document.getElementById("menu-list2").classList.add('menu__element--hidden');
                document.getElementById("menu-list3").classList.add('menu__element--hidden');
                document.getElementById("menu-list4").classList.add('menu__element--hidden');
                document.getElementById("menu-picture").classList.remove('menu__element--hidden');
                document.getElementById("button-open-menu").classList.remove('menu__button--close');
                document.getElementById("button-close-menu").classList.add('menu__button--close');
              }
