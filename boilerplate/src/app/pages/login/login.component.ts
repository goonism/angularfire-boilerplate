import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	userForm: FormGroup;

	constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) {}

	ngOnInit() {
		this.userForm = this.fb.group({
			'email': ['', [
					Validators.required,
					Validators.email
				]
			],
			'password': ['', [
					Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
					Validators.minLength(6),
					Validators.maxLength(25)
				]
			]
		});
	}

	emailLogin() {
		let email = this.userForm.value['email']
		let password = this.userForm.value['password']
		return this.afAuth.auth.signInWithEmailAndPassword(email, password)
	}

}

