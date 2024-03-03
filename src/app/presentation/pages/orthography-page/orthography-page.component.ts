import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TypingLoaderComponent
} from '@components/index';
import {TextMessageEvent} from "@interfaces/text-message-event";

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

  handleMessage({prompt, file}: TextMessageEvent) {

  }

}
