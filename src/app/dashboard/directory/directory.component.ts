import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserDetailsComponent } from './user-details/user-details.component';

interface DirectoryItem {
  letter: string;
  value: Contact[];
}
@Component({
  selector: 'phalanger-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  fakeContacts: Contact[] = [
    {
      is_practicioner: true,
      user: {
        id: 1,
        firstname: 'Thien chi',
        lastname: 'VO',
      },
    },
    {
      is_practicioner: true,
      user: {
        id: 2,
        firstname: 'Delphine',
        lastname: 'LACROIX',
      },
    },
    {
      is_practicioner: false,
      user: {
        id: 3,
        firstname: 'Lucas',
        lastname: 'BURLOT',
      },
    },
    {
      is_practicioner: false,
      user: {
        id: 4,
        firstname: 'Martin',
        lastname: 'PAUL',
      },
    },
    {
      is_practicioner: false,
      user: {
        id: 5,
        firstname: 'Carl',
        lastname: 'FUCHS',
      },
    },
  ];

  alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ');
  directoryItems: DirectoryItem[] = this.alphabet.map(letter => ({
    letter,
    value: [],
  }));

  constructor(private _bottomSheet: MatBottomSheet) {}
  ngOnInit() {
    this.fakeContacts.forEach(contact => {
      const firstLetter = contact?.user?.lastname[0].toUpperCase();
      const directoryItem = this.directoryItems.find(
        item => item.letter === firstLetter
      );
      if (directoryItem) {
        directoryItem.value.push(contact);
      }
    });
    this.directoryItems = this.directoryItems.filter(
      item => item.value.length > 0
    );
  }

  openUserDetails(user_id: number, is_practicioner: boolean) {
    const config = {
      data: {
        user_id: user_id,
        is_practicioner: is_practicioner,
      },
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'phalanger-bottom-sheet-container',
    };
    this._bottomSheet.open(UserDetailsComponent, config);
  }
}
