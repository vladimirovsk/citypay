#!/bin/sh
openssl genrsa -out privat.key 4096

openssl req -new -key privat.key -out privat.csr -subj '/C=UA/ST=Ukraine/L=Odessa/O=VOSTOK/CN=bankvostok.com.ua'

openssl x509 -req -in privat.csr -out privat.crt -CA ca.crt -CAkey ca.key -CAcreateserial -days 365

openssl x509 -in privat.crt -text -noout



#rem export to browser openssl pkcs12 -export -in userA.crt -inkey userA.key -name "User A BusyWait test cert" -out userA.p12
#rem open userA.p12
#rem example curl -v -s -k --key userA.key --cert userA.crt https://citypay.org.ua:3000/api/v1/payment/