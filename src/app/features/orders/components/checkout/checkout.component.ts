import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationMessagesComponent } from '../../../../shared/components/validation-messages/validation-messages.component';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, ValidationMessagesComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  resMsg: string = '';
  isLoading = true;
  checkoutForm!: FormGroup;
  cartId: string | null = '';
  private readonly orderService = inject(OrderService);
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);

  formInit() {
    this.checkoutForm = this.formBuilder.group({
      details: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      city: [null, [Validators.required]],
    });
  }
  getCartId() {
    this.activateRoute.paramMap.subscribe({
      next: (data) => {
        this.cartId = data.get('id');
      },
    });
  }
  submitForm() {
    this.isLoading = false;
    if (this.checkoutForm.valid || !this.isLoading) {
      this.orderService
        .createCheckout(this.cartId, this.checkoutForm.value)
        .subscribe({
          next: (res) => {
            this.isLoading = true;
            open(res.session.url, '_self');
          },
        });
    }
  }

  ngOnInit(): void {
    this.formInit();
    this.getCartId();
  }
}
