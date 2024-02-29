import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChatMessageComponent, MyMessageComponent} from '@components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent
  ],
  templateUrl: './orthography-page.component.html',
  styleUrl: './orthography-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class OrthographyPageComponent {

}
