#!/bin/sh
#rem export to browser openssl pkcs12 -export -in userA.crt -inkey userA.key -name "User A BusyWait test cert" -out userA.p12
#rem open userA.p12
#curl -v -s -k --key userA.key --cert userA.crt https://localhost:9919/api/v1/heatmeter/getHeatmeter

curl -v -k --key userA.key --cert userA.crt \
  --request POST \
  --url https://192.168.10.27:9919/api/v1/heatmeter/getHeatmeter \
  --header 'Content-Type: application/json' \
  --data '{\n
         "sn": "61839043",    \n   
         "client_name": "VOSTOK",\n   
          "client_id": 1,\n   
         "user_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfbmFtZSI6IlZPU1RPSyIsImNsaWVudF9pZCI6MX0.z3prnjVsykGKd2zd3axbE-9REtOBZ6utLBxHwp5PCoR3_XsuK8wpLI66jLPWqkVlpuCgsKxtfq0LwsAW0LkpOA
         }\n'


#curl --request POST \
#  --url http://server.citypay.org.ua:9911/api/v1/heatmeter/getHeatmeter \
#  --header 'Content-Type: application/json' \
#  --header 'cache-control: no-cache' \
#  --data '{\n     "sn": "61839043",\n    "client_name": "VOSTOK",\n    "client_id": 1,\n    "user_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfbmFtZSI6IlZPU1RPSyIsImNsaWVudF9pZCI6MX0.z3prnjVsykGKd2zd3axbE-9REtOBZ6utLBxHwp5PCoR3_XsuK8wpLI66jLPWqkVlpuCgsKxtfq0LwsAW0LkpOA"\n}'