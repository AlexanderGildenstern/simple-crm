import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-dialog-added-user',
  templateUrl: './dialog-added-user.component.html',
  styleUrls: ['./dialog-added-user.component.scss']
})
export class DialogAddedUserComponent implements OnInit {

  user!: User;
  loading = false;
  userId!: string;
  

  constructor(public dialogRef: MatDialogRef<DialogAddedUserComponent>, private firestore: AngularFirestore,) { }

  ngOnInit(): void {
  }

  saveUser(){
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

