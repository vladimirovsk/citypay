#!/bin/sh
#pass P@ssw0rd
#openssl genrsa -out citypay.key 4096
#openssl genrsa -out pivden.key 4096
#openssl genrsa -out privat.key 4096
openssl genrsa -out easypay.key 4096

#openssl req -new -key citypay.key -out citypay.csr -subj '/C=UA/ST=Ukraine/L=Odessa/O=CITYPAY/CN=citypay.org.ua'
#openssl req -new -key pivden.key -out pivden.csr -subj '/C=UA/ST=Ukraine/L=Odessa/O=PIVDEN/CN=https://bank.com.ua'
#openssl req -new -key privat.key -out privat.csr -subj '/C=UA/ST=Ukraine/L=Odessa/O=PRIVAT/CN=privatbank.ua'
openssl req -new -key easypay.key -out easypay.csr -subj '/C=UA/ST=Ukraine/L=Odessa/O=PRIVAT/CN=easypay.ua'

#openssl x509 -req -in citypay.csr -out citypay.crt -CA ca.crt -CAkey ca.key -CAcreateserial -days 365
#openssl x509 -req -in pivden.csr -out pivden.crt -CA ca.crt -CAkey ca.key -CAcreateserial -days 365
#openssl x509 -req -in privat.csr -out privat.crt -CA ca.crt -CAkey ca.key -CAcreateserial -days 365
openssl x509 -req -in easypay.csr -out easypay.crt -CA ca.crt -CAkey ca.key -CAcreateserial -days 365

#openssl x509 -in citypay.crt -text -noout
#openssl x509 -in pivden.crt -text -noout
#openssl x509 -in privat.crt -text -noout
openssl x509 -in easypay.crt -text -noout



#rem export to browser openssl pkcs12 -export -in userA.crt -inkey userA.key -name "User A BusyWait test cert" -out userA.p12
#rem open userA.p12
#rem example curl -v -s -k --key userA.key --cert userA.crt https://citypay.org.ua:3000/api/v1/payment/