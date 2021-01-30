import { Build              }   from    '@stencil/core';
import { Logger             }   from    'common/logger';

import { Observable, throwError         }   from    'rxjs';
import { map, catchError                }   from    'rxjs/operators';
import { doc                }   from    'rxfire/firestore';
import { collectionData     }   from    'rxfire/firestore';

import { ConfigService      }   from    'common/config.service';

export class FirestoreServiceController {

    public firebase             :   any;
    private firestore           :   any;

    constructor() {
        Logger.info('FirestoreService :: Constructor');
    }

    async initialize() {
        Logger.info('FirestoreService :: initialize');
        if (Build.isBrowser) {
            this.firebase       =   (await import('firebase/app')).default;
            await import('firebase/auth');
            await import('firebase/firestore');
            await import('firebase/analytics');

            if (this.firebase.apps.length > 0) return;

            this.firebase.initializeApp(ConfigService.firbaseKeys[ConfigService.build]);
            if (ConfigService.build === 'live') {
                this.firebase.analytics();
            }

            this.firestore      =  await this.firebase.firestore();
        }
        Logger.info('FirestoreService :: initialized');
    }

    public generateId(collection: string): string {
        return this.firestore.collection(collection).doc().id;
    }

    // Level 1: Document Create, Update

    public pushDocument(collectionName: string, payload: any): Promise<firebase.default.firestore.DocumentReference> {
        return this.firestore
            .collection(collectionName)
            .add(payload);
    }

    public addDocument(collectionName: string, id: string, payload: any): Promise<any> {
        return this.firestore
            .collection(collectionName)
            .doc(id)
            .set(payload, { merge: true });
    }

    public updateDocument(collectionName: string, id: string, payload: any): Promise<void> {
        return this.firestore
            .collection(collectionName)
            .doc(id)
            .update(payload);
    }

    public deleteDocument(collection1Name: string, id1: string): Promise<void> {
        return this.firestore
            .collection(collection1Name)
            .doc(id1)
            .delete();
    }


    // Level 2: Sub Document Create, Update

    public pushSubDocument(collection1Name: string, id: string, collection2Name: string, payload: any): Promise<firebase.default.firestore.DocumentReference> {
        return this.firestore
            .collection(collection1Name)
            .doc(id)
            .collection(collection2Name)
            .add(payload);
    }

    public addSubDocument(collection1Name: string, id1: string, collection2Name: string, id2: string, payload: any): Promise<void> {
        return this.firestore
            .collection(collection1Name)
            .doc(id1)
            .collection(collection2Name)
            .doc(id2)
            .set(payload, { merge: true });
    }

    public updateSubDocument(collection1Name: string, id1: string, collection2Name: string, id2: string, payload: any): Promise<void> {
        return this.firestore
            .collection(collection1Name)
            .doc(id1)
            .collection(collection2Name)
            .doc(id2)
            .update(payload);
    }

    public deleteSubDocument(collection1Name: string, id1: string, collection2Name: string, id2: string): Promise<void> {
        return this.firestore
            .collection(collection1Name)
            .doc(id1)
            .collection(collection2Name)
            .doc(id2)
            .delete();
    }



    // Level 1: Retrieve

    public fetchSingleDocument(collectionName: string, id: string, classType: any): Observable<any> {
        const ref               =   this.firestore
            .collection(collectionName)
            .doc(id);

        if (classType) {
            return doc(ref).pipe(
                map(snapshot => snapshot.exists ? new classType(snapshot.data()) : null),
                catchError(err => {
                    Logger.error('Firestore Service :: fetchSingleDocument', err);
                    return throwError(err);
                })
            );
        } else {
            return doc(ref).pipe(
                catchError(err => {
                    Logger.error('Firestore Service :: fetchSingleDocument', err);
                    return throwError(err);
                })
            );
        }
    }

    public fetchAllDocuments(collectionName: string, classType: any, limit: number = 100): Observable<Array<any>> {
        const ref               =   this.firestore
            .collection(collectionName).limit(limit);

        return collectionData(ref, 'id').pipe(
            map(docs => docs.map(d => new classType(d))),
            catchError(err => {
                Logger.error('Firestore Service :: fetchAllDocuments', err);
                return throwError(err);
            })
        );
    }

    public queryCollection(collection1Name: string, prop1: string, value1: any, classType: any, limit: number = 100): Observable<Array<any>> {
        const ref               =   this.firestore
            .collection(collection1Name)
            .where(prop1, '==', value1)
            .limit(limit);

        return collectionData(ref, 'id').pipe(
            map(docs => docs.map(d => new classType(d))),
            catchError(err => {
                Logger.error('Firestore Service :: queryCollection', err);
                return throwError(err);
            })
        );
    }

    public queryCollectionWithCondition(collection1Name: string, prop1: string, op1: string, value1: any, classType: any): Observable<Array<any>> {
        const ref               =   this.firestore
            .collection(collection1Name).limit(100)
            .where(prop1, op1, value1);

        return collectionData(ref, 'id').pipe(
            map(docs => docs.map(d => new classType(d))),
            catchError(err => {
                Logger.error('Firestore Service :: queryCollectionWithCondition', err);
                return throwError(err);
            })
        );
    }

    public queryCollectionWith2Conditions(collection1Name: string, prop1: string, op1: string, value1: any, prop2: string, op2: string, value2: any, classType: any): Observable<Array<any>> {
        const ref               =   this.firestore
            .collection(collection1Name)
            .where(prop1, op1, value1)
            .where(prop2, op2, value2)
            .limit(100);

        return collectionData(ref, 'id').pipe(
            map(docs => docs.map(d => new classType(d))),
            catchError(err => {
                Logger.error('Firestore Service :: queryCollectionWith2Conditions', err);
                return throwError(err);
            })
        );
    }

    public query2Collection(collection1Name: string, prop1: string, value1: string, prop2: string, value2: string, classType: any): Observable<Array<any>> {
        const ref               =   this.firestore
            .collection(collection1Name)
            .where(prop1, '==', value1)
            .where(prop2, '==', value2)
            .limit(100);

        return collectionData(ref, 'id').pipe(
            map(docs => docs.map(d => new classType(d))),
            catchError(err => {
                Logger.error('Firestore Service :: query2Collection', err);
                return throwError(err);
            })
        );
    }

    // Level 2: Retrieve

    public fetchSingleSubDocument(collection1Name: string, id1: string, collection2Name: string, id2: string, classType: any): Observable<any> {

        const ref               =   this.firestore
            .collection(collection1Name)
            .doc(id1)
            .collection(collection2Name)
            .doc(id2);

        if (classType) {
            return doc(ref).pipe(
                map(snapshot => snapshot.exists ? new classType(snapshot.data()) : null),
                catchError(err => {
                    Logger.error('Firestore Service :: fetchSingleSubDocument', err);
                    return throwError(err);
                })
            );
        } else {
            return doc(ref).pipe(
                catchError(err => {
                    Logger.error('Firestore Service :: fetchSingleSubDocument', err);
                    return throwError(err);
                })
            );
        }

    }

    public fetchAllSubDocuments(collection1Name: string, id1: string, collection2Name: string, classType: any, limit: number = 50): Observable<Array<any>> {
        const ref               =   this.firestore
            .collection(collection1Name)
            .doc(id1)
            .collection(collection2Name)
            .limit(limit);

        return collectionData(ref, 'id').pipe(
            map(docs => docs.map(d => new classType(d))),
            catchError(err => {
                Logger.error('Firestore Service :: fetchAllSubDocuments', err);
                return throwError(err);
            })
        );
    }

    public fetchAllSubDocumentsWithStartKeyValue(collection1Name: string, id1: string, collection2Name: string, startKey: string, startValue: any, classType: any, limit: number = 50): Observable<Array<any>> {
        const ref               =   this.firestore
            .collection(collection1Name)
            .doc(id1)
            .collection(collection2Name)
            .orderBy(startKey, 'desc')
            .startAfter(startValue)
            .limit(limit);

        return collectionData(ref, 'id').pipe(
            map(docs => docs.map(d => new classType(d))),
            catchError(err => {
                Logger.error('Firestore Service :: fetchAllSubDocuments', err);
                return throwError(err);
            })
        );
    }



    // Level 3: Retrieve

    public fetchSingleGrandSubDocument(collection1Name: string, id1: string, collection2Name: string, id2: string, collection3Name: string, id3: string, classType: any): Observable<any> {
        const ref               =   this.firestore
            .collection(collection1Name)
            .doc(id1)
            .collection(collection2Name)
            .doc(id2)
            .collection(collection3Name)
            .doc(id3);

        if (classType) {
            return doc(ref).pipe(
                map(snapshot => snapshot.exists ? new classType(snapshot.data()) : null),
                catchError(err => {
                    Logger.error('Firestore Service :: fetchSingleGrandSubDocument', err);
                    return throwError(err);
                })
            );
        } else {
            return doc(ref).pipe(
                catchError(err => {
                    Logger.error('Firestore Service :: fetchSingleGrandSubDocument', err);
                    return throwError(err);
                })
            );
        }

    }

    // Level N: Retrieve

    public deepFetchAllDocuments(path: string, classType: any, limit: number = 100): Observable<Array<any>> {
        const ref               =   this.firestore
            .collection(path).limit(limit);

        return collectionData(ref, 'id').pipe(
            map(docs => docs.map(d => new classType(d))),
            catchError(err => {
                Logger.error('Firestore Service :: deepFetchAllDocuments', err);
                return throwError(err);
            })
        );
    }


    public getRandomIDInCollection(collectionName: string): string {
        return this.firestore.collection(collectionName).doc().id;
    }


}

export const FirestoreService = new FirestoreServiceController();
