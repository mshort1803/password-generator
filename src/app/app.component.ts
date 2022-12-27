import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  saveToClipboard = false;
  password = ""

  async copyToClipboard(text: string) {
    var copyText = text
    navigator.clipboard.writeText(copyText).then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!
    });
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxwz';
    const symbols = "!@#$%^&*()_+=-~"
    this.password = ''

    let validChars = ''
    if (this.includeLetters) {
      validChars += letters
    }

    if (this.includeNumbers) {
      validChars += numbers
    }
    if (this.includeSymbols) {
      validChars += symbols
    }
    for (let i = 0; i <= this.length; i++) {
      const index = Math.round(Math.random() * (validChars.length - 1))
      this.password += validChars[index]
    }
    if (this.saveToClipboard) {
      this.copyToClipboard(this.password)
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeSaveToClipboard() {
    this.saveToClipboard = !this.saveToClipboard;
  }

  onInputLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
