import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

declare var window : any;
const contractAbi = require("./contractABI.json");

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private web3 : Web3;
  private contract : Contract;
  private contractAddress = "0x...."; // replace with your local blockchain created contract Address from Ganache Transactions

  constructor(private zone : NgZone)
  {
    if(window.web3) {

      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(
        contractAbi,
        this.contractAddress
      );

      window.ethereum.enable().catch((err) =>  {
        console.log(err);
      });
    }
    else {
      console.warn("Metamask not found!");
    }
  }

  getAccount() : Promise<string> {
    return this.web3.eth.getAccounts().then((accounts) => accounts[0] || '');
  }

  async executeTransaction(fnName : string, ...args : any[]) : Promise<void> {
    const acc = await this.getAccount();
    this.contract.methods[fnName](...args).send({ from : acc});
  }

  async call(fnName : string, ...args : any[]){
    const acc = await this.getAccount();
    this.contract.methods[fnName](...args).call({ from : acc});
  }

  onEvents(event : string) {
    return new Observable((observer) => {
      this.contract.events[event]().on('data', (data) => {
        this.zone.run(() => {
          observer.next({
            event : data.event,
            payload : data.returnValues
          });
        })
      });
    });
  }
}
