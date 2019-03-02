import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash/lodash';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-traversal',
  templateUrl: './traversal.component.html',
  styleUrls: ['./traversal.component.scss']
})
export class TraversalComponent implements OnInit {
  public userForm = new FormGroup({
    eForm7: new FormControl(''),
    eForm7Admin: new FormControl(''),
    ePremium: new FormControl(''),
    ePremiumAdmin: new FormControl('')
  });
  public originalVals = [];
  public profile = {userAccounts: []};
  constructor() { }

  ngOnInit() {
    this.profile = {
      userAccounts: [{
        accountNumber: '12345',
        firmNumber: '99999',
        entitlements: [
          {
            service: 'EFORM7',
            role: 'ADMIN'
          },
          {
            service: 'EPREMIUM',
            role: 'ADMIN'
          }
        ]
      }, {
        accountNumber: '7777',
        firmNumber: '2222',
        entitlements: [
          {
            service: 'EFORM7',
            role: 'USER'
          },
          {
            service: 'EPREMIUM',
            role: 'ADMIN'
          },
          {
            service: 'EWISR',
            role: 'ADMIN'
          }
        ]
      },
      {
        accountNumber: '11111',
        firmNumber: '33333',
        entitlements: [
          {
            service: 'EFORM7',
            role: 'USER'
          },
          {
            service: 'EPREMIUM',
            role: 'ADMIN'
          },
          {
            service: 'EWISR',
            role: 'USER'
          }
        ]
      }, {
        accountNumber: '99933',
        firmNumber: '223232',
        entitlements: [{
          service: 'EPREMIUM',
          role: 'USER'
        }]
      }]
    };

    this.userForm.get('eForm7').setValue(this.presetToField('EFORM7', 'USER').join('\n'));
    this.userForm.get('eForm7Admin').setValue(this.presetToField('EFORM7', 'ADMIN').join('\n'));
    this.userForm.get('ePremium').setValue(this.presetToField('EPREMIUM', 'USER').join('\n'));
  }

  presetToField(service, role) {
    const fieldNumbers = [];
    this.profile.userAccounts.forEach(userAccount => {
      if (userAccount.entitlements) {
        userAccount.entitlements.forEach(entitlement => {
          if (entitlement.service === service && entitlement.role === role) {
            fieldNumbers.push(userAccount.firmNumber + ' - ' + userAccount.accountNumber);
          }
        });
      }
    });
    return fieldNumbers;
  }

  submit() {
    const userProfile = Object.assign({}, this.prepareSubmit('USER'));
    const adminProfile = Object.assign({}, this.prepareSubmit('ADMIN'));
    const concatenated = userProfile.userAccounts.concat(adminProfile.userAccounts);
    console.log(_.uniqBy(concatenated, v => [v.accountNumber, ' - ', v.firmNumber].join()));
  }

  prepareSubmit(role: string) {
    let eForm7;
    let ePremium;
    if (role === 'USER') {
      eForm7 = this.userForm.get('eForm7').value.split('\n');
      ePremium = this.userForm.get('ePremium').value.split('\n');
    } else if (role === 'ADMIN') {
      eForm7 = this.userForm.get('eForm7Admin').value.split('\n');
      ePremium = this.userForm.get('ePremiumAdmin').value.split('\n');
    }


    const dataTypes = [{
      type: 'EFORM7', data: eForm7
    }, {
      type: 'EPREMIUM', data: ePremium
    }];
    this.profile.userAccounts = [];
    dataTypes.forEach(value => {
      value.data.forEach(dat => {
        console.log('DAT IS');
        console.log(dat);
        if (dat.length > 0) {
          const split = dat.split(' - ');
          const userAccount = {
            accountNumber: split[0],
            firmNumber: split[1],
            entitlements: [],
            legacyInfo: null,
            role: role
          };
          this.profile.userAccounts.push(userAccount);
        }
      });
    });
    dataTypes.forEach(value => {
      value.data.forEach(dat => {
        const split = dat.split(' - ');
        const entitlement = {
          service: value.type,
          role: role
        };
        this.profile.userAccounts.forEach((userAccount, key) => {
          if (userAccount.accountNumber === split[0] && userAccount.firmNumber === split[1]) {
            if (!this.profile.userAccounts[key].entitlements) {
              this.profile.userAccounts[key].entitlements = [];
            }
            this.profile.userAccounts[key].entitlements.push(entitlement);
          }
        });
      });
    });
    return this.profile;
  }

  traverse(myObject, targetKey, targetValue, foundMatches) {
    for (const o in myObject) {
      if (myObject[o] instanceof Object) {
        this.traverse(myObject[o], targetKey, targetValue, foundMatches);
      } else {
        if (myObject.entitlements) {
          myObject.entitlements.forEach(entitlement => {
            if (entitlement[targetKey] === targetValue) {
              foundMatches.add(myObject.firmNumber + ' - ' + myObject.accountNumber);
            }
          });
        }
      }
    }
  }

  addToObject(myObject, targetKey, targetValue, newEntitlement) {
    for (const o in myObject) {
      if (myObject[o] instanceof Object) {
        this.addToObject(myObject[o], targetKey, targetValue, newEntitlement);
      } else {
        if (myObject[targetKey] === targetValue) {
          if (!myObject.entitlements) {
            myObject.entitlements = [];
          }
          if (!myObject.entitlements.includes(newEntitlement)) {
            myObject.entitlements.push(newEntitlement);
          }
        }
      }
    }
  }
}
