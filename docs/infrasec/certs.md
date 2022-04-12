# SSL Certificates

SSL Certificates are most commonly used to verify a server's identity and
encrypt HTTP traffic. Usually, we try to use offerings like Amazon's
[AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to
eliminate the toil of obtaining certificates and keeping them up to date.

However, this isn't always feasible. Sometimes we can use self-signed
certificates if it will not be exposed to users (for instance, to encrypt
the connection between containers and their ALB), but in many cases we'll
need to get a real certificate.

Note: TLS ([Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security))
is essentially the second generation of SSL. It is not uncommon for both
terms to be used interchangeably at this point, but "real" SSL is
deprecated. Any modern systems should be using TLS.

## Getting a real certificate

### Let's Encrypt

[Let's Encrypt](https://letsencrypt.org/) provides free short-lifetime
certificates; they also provide a daemon which can autorenew these
certificates if you are running on actual hosts (or full instances) where
running an additional daemon makes sense. However, this doesn't work
for many of our use cases, where we are trying to run our applications in
bare containers.

### SSLMate

If you need to get a certificate and cannot use a service like ACM or
Let's Encrypt, you can get one via [SSLMate](https://sslmate.com/); they
offer a command line client that makes it relatively easy to get new
certificates or update old ones, autorenewal, and a reasonable price for
one-off certificates. Their documentation is
[here](https://sslmate.com/help/) but the general process is this:

- Register a new account with SSLMate; save the username and password
  to 1Password for your project.

- Install the SSLMate client:

  ```console
  $ brew install sslmate
  ```

- Generate a new certificate. If you just need a cert for a single
  domain, this should be just:

  ```console
  $ mkdir ~/sslmate
  $ cd ~/sslmate
  $ sslmate buy example.com --approval=dns
  ```

  This will prompt you for your SSLMate username and password, and
  ask you to confirm your order. Once you do, it will provide you with
  a DNS record you need to create to verify you have access to this
  domain. Create this record (usually via Terraform) and then continue
  this workflow.

- Once your certificate has been validated, `sslmate` will dump a key,
  a certificate, an intermediate CA certificate, and a combined server
  chain certificate into your current directory. You will probably only
  need the first two; everything but the key can be later retrieved from
  SSLMate if you need to. *The key only exists where you generated the
  key* (so, your laptop) -- make sure you put this somewhere safe (like
  the AWS Parameter Store); if you lose it you will need to regenerate
  the key and the certs.

- The easiest way to pass these certificates to your application is
  likely via the AWS Parameter Store using `chamber`, but it may vary for
  your project. To add it to the Parameter Store with `chamber`, you can
  use a command similar to this one:

  ```console
  $ aws-vault exec my-aws-profile -- chamber write "app-myapp-myenv" server-cert - < example.com.crt
  $ aws-vault exec my-aws-profile -- chamber write "app-myapp-myenv" server-key - < example.com.key
  ```

## External resources

- How an SSL/TLS handshake works: <https://www.ssl.com/article/ssl-tls-handshake-overview/>
