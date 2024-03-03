import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TextMessageEvent} from "@interfaces/text-message-event";

@Component({
  selector: 'app-text-message-box',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './text-message-box.component.html',
  styleUrl: './text-message-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextMessageBoxComponent implements OnInit{
  @Input() placeholder: string = '';
  @Input() disableCorrections: boolean = false;
  @Input() allowAttachments: boolean = false;

  @Output() onMessage = new EventEmitter<TextMessageEvent>();

  fb: FormBuilder = inject(FormBuilder);
  form: FormGroup<any> = this.fb.group({
    prompt: [null, this.allowAttachments ? null : Validators.required],
    file: [null, this.allowAttachments ? Validators.required : null]
  });

  file: File | undefined;


  ngOnInit(): void {
    const promptControl = this.form.get('prompt');
    const fileControl = this.form.get('file');

    if (this.allowAttachments) {
      fileControl?.setValidators([Validators.required]);
      promptControl?.clearValidators();
    } else {
      promptControl?.setValidators([Validators.required]);
      fileControl?.clearValidators();
    }

    promptControl?.updateValueAndValidity();
    fileControl?.updateValueAndValidity();
  }

  handleSubmit() {
    if(this.form?.invalid) return;

    const {prompt, file} = this.form?.value;

    this.onMessage.emit({prompt, file: file});
    this.form?.reset();
  }

  handleSelectedFile(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const files: FileList = inputElement.files;
      const file: File  = files[0];

      this.form.get('file')?.setValue(file);
    }

  }
}
