import { Component, inject, OnInit } from '@angular/core';
import { EmailOtpType } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

const supabaseURL = 'https://hhoavnmqrezwbnwzfmjo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhob2F2bm1xcmV6d2Jud3pmbWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjg4OTUsImV4cCI6MjA2Mjg0NDg5NX0.IJ6t9v4Xe4fYoReXd_R2UPNYjF_VZo4ePbhi8GJNi9g';
export const sb = createBrowserClient(supabaseURL, supabaseKey);

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  route = inject(ActivatedRoute);

  password = '';
  confirmPassword = '';
  error: string | null = null;
  success = false;

  async ngOnInit() {
    const token_hash = this.route.snapshot.queryParamMap.get('token_hash');
    const type = this.route.snapshot.queryParamMap.get('type') as EmailOtpType | null

    if (token_hash && type) {
      const { error } = await sb.auth.verifyOtp({ type, token_hash });
      if(error){
        console.log(error);
        this.error = error?.message;
      } 
    }
  }

  async resetPassword() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    const { error } = await sb.auth.updateUser({ password: this.password });
    if (error) {
      this.error = error.message;
    } else {
      this.success = true;
    }
  }
}
