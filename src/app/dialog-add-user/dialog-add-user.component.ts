import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate!: Date ;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime()
    console.log('Current user is', this.user);
    this.loading = true;    //

    this.firestore
    .collection('users')  // frei bestimmbar
    .add(this.user.toJson())       // was will ich mitgeben
    .then((result: any) => {
      this.loading = false;
      this.dialogRef.close();   // wenn alles hochgeladen ist dialog schließen
      console.log('Adding user finished', result);
    });               // was möchte ich machen wenn fertig ist

  }

}
