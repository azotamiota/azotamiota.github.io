        const skillsCurtain = document.getElementById('curtain')
        const curtainCloseButton = document.getElementById('close-curtain-button')
        const skillListElem = document.getElementById('skill-list')
        function showSkillsCurtain () {
            skillsCurtain.style.height = '100%'
            curtainCloseButton.style.display = 'initial'
            skillListElem.style.display = 'grid'
        }
        function closeCurtain () {
            skillsCurtain.style.height = '0%'
            curtainCloseButton.style.display = 'none'
            skillListElem.style.display = 'none'

        }
       
        const welcomeSection = document.getElementById("welcome-section");
        const aboutSection = document.getElementById("about-section");
        const contactSection = document.getElementById('contact-section')
        const projectsArticle = document.getElementById('projects-article')
        const projectsSection2 = document.getElementById('projects2')
        const projectsSection3 = document.getElementById('projects3')
        const loadSecondProjects = document.getElementById('firstToSecond')
        const loadThirdProjects = document.getElementById('secondToThird')
        const smallNavItems = document.getElementById("small-nav-items")
        
        function collapseProjects() {
            projectsSection2.classList.add('hide-section');
            projectsSection3.classList.add('hide-section');
            loadSecondProjects.classList.remove('fade-out');
            loadSecondProjects.classList.remove('hide-section');
            loadThirdProjects.classList.add('hide-section');
        }
        
        function toggleNavItems() {
            document.getElementById('container').classList.toggle('change')
            smallNavItems.classList.toggle('hide-section')
        }
        function showWelcome() {
            if (!projectsArticle.classList.contains('hide-section')) {
                projectsArticle.classList.add('hide-section');
            }
            if (!aboutSection.classList.contains("hide-section")) {
              aboutSection.classList.add("hide-section");
            }
            if (!contactSection.classList.contains('hide-section')) {
                contactSection.classList.add('hide-section');
            }
            if (loadSecondProjects.classList.contains('fade-out')) {
                collapseProjects();
            }
            if (window.innerWidth <= 425) {
                toggleNavItems()
            }
            welcomeSection.classList.remove('hide-section');
        }
        function showAbout() {
            if (!welcomeSection.classList.contains("hide-section")) {
              welcomeSection.classList.add("hide-section");
            }
            if (!projectsArticle.classList.contains("hide-section")) {
              projectsArticle.classList.add("hide-section");
            }
            if (!contactSection.classList.contains("hide-section")) {
              contactSection.classList.add("hide-section");
            }
            if (loadSecondProjects.classList.contains("fade-out")) {
              collapseProjects();
            }
            if (window.innerWidth <= 425) {
              toggleNavItems();
            }
            aboutSection.classList.remove('hide-section')
        }
        function showProjectsArticle() {
            if (!welcomeSection.classList.contains('hide-section')) {
                welcomeSection.classList.add('hide-section');
            }
            if (!contactSection.classList.contains('hide-section')) {
                contactSection.classList.add('hide-section');
            }
            if (!aboutSection.classList.contains("hide-section")) {
              aboutSection.classList.add("hide-section");
            }
             if (window.innerWidth <= 425) {
               toggleNavItems();
             }
            projectsArticle.classList.remove('hide-section');
        }
        function showContact() {
            if (!welcomeSection.classList.contains('hide-section')) {
                welcomeSection.classList.add('hide-section');
            }
            if (!projectsArticle.classList.contains('hide-section')) {
                projectsArticle.classList.add('hide-section');
            }
            if (!aboutSection.classList.contains("hide-section")) {
              aboutSection.classList.add("hide-section");
            }
            if (loadSecondProjects.classList.contains('fade-out')) {
                collapseProjects();
            }
             if (window.innerWidth <= 425) {
               toggleNavItems();
             }
            contactSection.classList.remove('hide-section');
        }
        function showProjects2() {
            loadSecondProjects.classList.add('fade-out')
            setTimeout(() => {
                loadSecondProjects.classList.add('hide-section');
                projectsSection2.classList.remove('hide-section');
                loadThirdProjects.classList.remove('hide-section')
                loadThirdProjects.classList.remove('fade-out')
            }, 500) 
        }
        function showProjects3() {
            loadThirdProjects.classList.add('fade-out');
          setTimeout(() => {
                loadThirdProjects.classList.add('hide-section');
                projectsSection3.classList.remove('hide-section');
            }, 500)
        }
