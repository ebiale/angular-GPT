import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TypingLoaderComponent
} from '@components/index';
import {
  Message,
  TextBoxMessageOption,
  TextMessageEvent
} from "@interfaces/index";
import {OpenAIService} from "../../services/open-ai.service";


@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent
  ],
  templateUrl: './orthography-page.component.html',
  styleUrl: './orthography-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class OrthographyPageComponent {



}
