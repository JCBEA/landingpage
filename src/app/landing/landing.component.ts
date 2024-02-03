import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Load Scripts
    this.loadScript('assets/assets/js/jquery.min.js');
    this.loadScript('assets/assets/js/jquery-ui.js');
    this.loadScript('assets/assets/js/popper.min.js');
    this.loadScript('assets/assets/js/bootstrap.min.js');
    this.loadScript('assets/assets/js/owl.carousel.min.js');
    this.loadScript('assets/assets/js/jquery.magnific-popup.min.js');
    this.loadScript('assets/assets/js/jquery.mixitup.min.js');
    this.loadScript('assets/assets/js/waypoints.min.js');
    this.loadScript('assets/assets/js/jquery.counterup.min.js');
    this.loadScript('assets/assets/js/jquery-contact.js');
    this.loadScript('assets/assets/js/jquery.ajaxchimp.min.js');
    this.loadScript('assets/assets/js/jquery.easing.min.js');
    this.loadScript('assets/assets/js/wow.min.js');
    this.loadScript('assets/assets/js/scrollreveal.min.js');
    this.loadScript('assets/assets/js/main.js');
    // Add other scripts as needed

    // Load Styles
    this.loadStyle('assets/assets/css/bootstrap.min.css');
    this.loadStyle('assets/assets/css/jquery-ui.css');
    this.loadStyle('assets/assets/css/icofont.min.css');
    this.loadStyle('assets/assets/css/animate.css');
    this.loadStyle('assets/assets/css/owl.carousel.css');
    this.loadStyle('assets/assets/css/magnific-popup.css');
    this.loadStyle('assets/assets/css/owl.theme.default.min.css');
    this.loadStyle('assets/assets/css/style.css');
    this.loadStyle('assets/assets/css/responsive.css');
    // Add other styles as needed
  }

  private loadScript(scriptPath: string) {
    const script = this.renderer.createElement('script');
    script.src = scriptPath;
    this.renderer.appendChild(document.body, script);
  }

  private loadStyle(stylePath: string) {
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylePath;
    this.renderer.appendChild(document.head, link);
  }
}

