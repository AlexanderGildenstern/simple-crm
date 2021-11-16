import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-added-adress',
  templateUrl: './dialog-added-adress.component.html',
  styleUrls: ['./dialog-added-adress.component.scss']
})
export class DialogAddedAdressComponent implements OnInit {
user!: User;
loading = false;
birthDate!: Date;
userId!: string;

saveUser(){
  this.loading = true;

  this.firestore
  .collection('users')
  .doc(this.userId)
  .update(this.user.toJson())
  .then(() => {
    this.loading = false;
    this.dialogRef.close()
  });;
}

  constructor(public dialogRef: MatDialogRef<DialogAddedAdressComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

}
