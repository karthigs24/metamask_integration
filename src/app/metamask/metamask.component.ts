import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.css']
})
export class MetamaskComponent implements OnInit {
  web3Provider: any = null;
  ethereum: any = { };
  constructor() { }

  connectToMetaMask() {
    this.ethereum = window['ethereum'];
    if (typeof this.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
    if (this.ethereum) {
      this.web3Provider = this.ethereum;
      try {
        // Request account access
        this.ethereum.request({ method: 'eth_requestAccounts' }).then((address: any) => {
          console.log("Account connected: ", address[0]); // Account address that you had imported
        });
      } catch (error) {
        // User denied account access...
        console.error("User denied account access");
      }
    }
  }
  ngOnInit(): void {
  }

}
