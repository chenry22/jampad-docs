// I'll keep it 100, I ChatGPT'ed like 90% of this

import { Component, inject, OnInit } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

export const supabase = createClient(
  'https://hhoavnmqrezwbnwzfmjo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhob2F2bm1xcmV6d2Jud3pmbWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjg4OTUsImV4cCI6MjA2Mjg0NDg5NX0.IJ6t9v4Xe4fYoReXd_R2UPNYjF_VZo4ePbhi8GJNi9g'
);

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);

  password = '';
  confirmPassword = '';
  error: string | null = null;
  success = false;

  async ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code');
    if(!code) {
      this.error = "Invalid or expired reset link.";
      return;
    }
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (error || !data?.session) {
      this.error = 'Failed to set session: ' + (error?.message || 'unknown error');
    }
  }

  async resetPassword() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: this.password });

    if (error) {
      this.error = error.message;
    } else {
      this.success = true;
    }
  }
}
