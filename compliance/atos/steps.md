"The ATO process", as it's commonly called, is formally defined in the National Institute of Standards & Technology (NIST)'s [Risk Management Framework (RMF)](<https://csrc.nist.gov/projects/risk-management/risk-management-framework-(RMF)-Overview>):

![NIST Risk Management Framework diagram](https://csrc.nist.gov/CSRC/media/Projects/Risk-Management/images-media/OrgRMF_v3.png)

The steps in the process are as follows:

## Step 1: Categorize Information System

The information systems' owner, working with the AO, categorizes the system based on the potential impact on the organization if the information system, or the information within it, is jeopardized. The system will end up with a category of _low_, _moderate_ or _high_, based on criteria described [here](../categorization/).

If your system will be providing novel or risky functions, or handling extremely sensitive data, do this as early as possible.

## Step 2: Select Security Controls

"Controls" are individual security requirements laid out by the National Institute of Standards and Technology (NIST). NIST's encyclopedic [Special Publication 800-53](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf) (currently on revision 4) is the definitive guide to security and privacy controls for federal information systems.

Your AO determines which controls need to be implemented. This is generally based on the following:

- _The impact level of the system_ (low, moderate or high). SP 800-53 provides a "baseline" set of controls for each level. The higher the level, the more controls or control enhancements are in scope. For systems running on cloud infrastructure, you should consult [FedRAMP's security control documentation](https://www.fedramp.gov/resources/documents-2016/).
- _Which controls are already taken care of by your infrastructure_. If you're running in the cloud, many controls are taken care of at the infrastructure or platform layer. If your provider has received a FedRAMP P-ATO, it will provide a document called a _customer responsibility matrix_ (CRM) or _control implementation summary_ (CIS) listing the residual or hybrid controls that are the responsibility (or partial responsibility) of the applications running on the infrastructure or platform.
- _What type of ATO you want to receive_. The options will be specific to the organization doing the authorizing.
- _Tailoring_. The information system owner, working with the AO and the agency's information security team, can then add, remove or modify controls to achieve cost-effective, risk-based security, based on the agency's mission or business need.

This step should happen as an integral part of any system design activities. The team should also develop a monitoring strategy to ensure that security controls continue to be effective once the system receives its authority to operate.

## Step 3: Implement Security Controls

As part of system development work, controls are implemented. The implementation is documented in the SSP.

This step is essentially "state how your system meets each of the regulations". Using established web frameworks (Rails, Django, etc.) and hosting in a platform takes care of a lot of the lower-level controls and security best practices for you, so you only need to be concerned with your application's custom code and configuration. This custom code and configuration is known as the "attack surface". The final version of this document is called the System Security Plan.

Fill out the documentation. The full list of data and functions in and of the system (in government parlance "mission based information types" and "delivery mechanisms") must be itemized in structured data. While the data types are obviously arbitrary and custom to each system we produce, the government has a formalized data set of mission functions that should be mapped to the system via [NIST 800-60](http://csrc.nist.gov/groups/SMA/fisma/categorization.html). For a Rails app, for example, this can simply be a link to the `db/schema.rb` file on GitHub.

## Step 4: Assess Security Controls

In other words, "verify that your system is secure".

Before your system can go live with government information, your contol implementation must be tested. Testing is often performed by the development team and infrastructure team working together with the agency's information security team, based on a security assessment plan. The security assessment plan will depend upon the type of ATO. FedRAMP has a [Security Assessment Framework](https://www.fedramp.gov/resources/documents-2016/) for FedRAMP ATOs.

There will usually be a penetration test conducted on the system. Any penetration test findings deemed serious enough to prevent an ATO will need to be fixed right away to unblock the ATO process. They will also review the SSP document and test the control narratives. This testing and review process will take 1-2 weeks and should be the top priority for the project team at the time.

The results of the assessment are documented in a _security assessment report_ (SAR). Depending on the findings of the security assessment, remediation work may have to take place before the system receives its ATO. Other problems that are less critical can be remediated at a later date: these are listed in a document called a _plan of action and milestones_ (POAM or POA&M).

## Step 5: Authorize Information System

The SSP, SAR and POAM together form a _security authorization package_ (FedRAMP requires a further document: a continuous monitoring strategy). The Authorizing Official will make a risk-based decision whether to grant an ATO based on the information in this package. This decision, made in consultation with other key stakeholders such as the CISO, balances security considerations with the mission and operational needs of the agency.

Once all of the materials are prepared and testing is done and the system is considered "ready" by the Authorizing Official, they will sign the ATO memo. If an ATO is granted, an _authorization decision document_ is issued and signed by the AO which lists the conditions under which the ATO will remain valid, including the ATO's expiry date.

## Step 6: Monitor Security Controls

Once a system receives an ATO, it must be assessed at regular intervals to ensure the effectiveness of the control implementation. Any changes to the system's security boundary or its environment should also be assessed to determine their impact.

There are several ways to ensure that your system remains compliant:

- Perform regular, automated security scans on your system, and act on the findings in a timely manner.
- Keep your System Security Plan (and any other architecture/security-related documentation) up-to-date.
