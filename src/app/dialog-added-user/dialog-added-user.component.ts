import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-added-user',
  templateUrl: './dialog-added-user.component.html',
  styleUrls: ['./dialog-added-user.component.scss']
})
export class DialogAddedUserComponent implements OnInit {

  user: User = new User();
  loading = false;
  userId!: string;


  constructor(public dialogRef: MatDialogRef<DialogAddedUserComponent>, private firestore: AngularFirestore,) { }

  ngOnInit(): void {
  }

  saveUser() {
    if (this.userId) {
    this.loading = true;
    
      this.firestore
        .collection('users')
        .doc(this.userId)
        .update(this.user.toJson())
        .then(() => {
          this.loading = false;
          this.dialogRef.close()
        });
    }
  }

}

