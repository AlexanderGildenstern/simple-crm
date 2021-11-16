import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogAddedAdressComponent } from '../dialog-added-adress/dialog-added-adress.component';
import { DialogAddedUserComponent } from '../dialog-added-user/dialog-added-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any = '';
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log("got id", this.userId);
      this.getUser();
    })
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)     // hier gtreifen wir auf eine bestimmte id zu in users
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
        console.log('Retrieved user',this.user);
        
      });
  }

  editMenu(){
  const dialog =  this.dialog.open(DialogAddedAdressComponent);
  dialog.componentInstance.user = new User(this.user.toJson());  // durch das new erstelle ich eine kopie vom user und gebe im die parameter um die gleichen informationen anzuzeigen beim öffnen.
  dialog.componentInstance.userId = this.userId;
  }
  editUser(){
    const dialog = this.dialog.open(DialogAddedUserComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
  }

  

}
