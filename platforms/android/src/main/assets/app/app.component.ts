import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Train-yourself.com 123"></ActionBar>
    
    <!-- Your UI components go here -->
    <TextField hint="Email Address" keyboardType="email"
      autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true"></TextField>

    <Button text="Sign in"></Button>
    <Button text="Sign up for Groceries"></Button>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
