import { Component } from '@angular/core';

//This is a decorator (paramter of decorator can accept object)
@Component({
  //selector is a tag that will use as HTML template of other component
  selector: 'app-property-card',
  //template: '<h1>I am a Card</h1>',
  templateUrl: 'property-card.component.html',
  //styles: ['h1{font-weight:normal;}'],
  styleUrls: ['property-card.component.css'],
})
export class PropertyCardComponent {
  Property: any = {
    Id: 1,
    Name: 'MyHouse',
    Type: 'House',
    Price: 12000,
  };
}
