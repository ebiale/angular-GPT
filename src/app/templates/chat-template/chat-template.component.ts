import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {Message} from "@interfaces/message";
import {OpenAIService} from "../../presentation/services/open-ai.service";
import {TextBoxMessageOption} from "@interfaces/text-box-message-option";
import {TextMessageEvent} from "@interfaces/text-message-event";
import {ChatMessageComponent} from "@components/chat-bubbles/chat-message/chat-message.component";
import {MyMessageComponent} from "@components/chat-bubbles/my-message/my-message.component";
import {TextMessageBoxComponent} from "@components/text-boxes/text-message-box/text-message-box.component";
import {TypingLoaderComponent} from "@components/typing-loader/typing-loader.component";

@Component({
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
    TextMessageBoxComponent,
    TypingLoaderComponent
  ],
  templateUrl: './chat-template.component.html',
  styleUrl: './chat-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatTemplateComponent {
  messages = signal<Message[]>([]);
  isLoading = signal(false);

  openAIService: OpenAIService = inject(OpenAIService);

  options: TextBoxMessageOption[] = [{id: '1', text: '1'}, {id: '2', text: '2'}]
  handleMessage({prompt, file, selectedOption}: TextMessageEvent) {

  }
}
