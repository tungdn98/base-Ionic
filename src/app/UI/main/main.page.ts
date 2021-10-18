import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Service/authService/auth.service';
import {Customer} from "../../Models/Customer";
import {CustomerService} from "../../Service/Customer/customer.service";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  items = [];
  totalPages = 0;
  page = 0;
  number = 0;

  customer:Customer ={
    id:0,
    name:'',
    address:''
  }

  constructor(private auth: AuthService, private cusService: CustomerService,public toastController: ToastController) {
    this.addMoreItems();
  }

  ngOnInit() {

  }

  submitCustomer(form) {
    form.value.id=null;
      this.cusService.addCustomer(form.value).subscribe(data => {
        this.items.push(form.value);
        this.presentToast('đã thêm user '+form.value.name);
      });
  }

  updateCustomer(form) {
    form.value.id = this.customer.id;
    this.cusService.updateCustomer(form.value).subscribe(data => {
      this.presentToast('đã update user '+form.value.name);
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      event.target.complete();
    }, 500);
  }

  addMoreItems() {
    this.cusService.getCustomer(this.page, 10).subscribe(data => {
      this.totalPages = data.totalPages;
      this.number = data.number;
      this.page += 1;
      for (let i = 0; i < data.content.length; i++) {
        this.items.push(data.content[i]);
      }
    });
  }

  deleteCustomer(item){
    this.cusService.deleteCustomer(item).subscribe(data =>{
      this.removeAllInstances(item);
      this.presentToast('đã xóa id '+item.id)
    });
  }

  // ------------
  async presentToast(str) {
    const toast = await this.toastController.create({
      message: str,
      duration: 2000
    });
    toast.present();
  }

  handleClickItem(cus){
    this.customer = cus;
  }

  removeAllInstances(item) {
    for (var i = this.items.length; i--;) {
      if (this.items[i] === item) this.items.splice(i, 1);
    }
  }


}
