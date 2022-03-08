# [ATOs](README.md) / Security Categorization

## Overview

The impact level of your project is very important, and affects the process you'll follow to launch your project. At first you'll be making a prediction of your project impact level. As you enter the ATO assessment process the impact level will be determined with the help of your AO.

The impact level is determined by the functionality of the system and the data it contains. The methodology defines three security objectives of the system: `confidentiality`, `integrity`, and `availability`. These security objectives are assigned one of three impact levels: `low`, `moderate`, or `high`. This process is described in [NIST's FIPS 199 publication](http://csrc.nist.gov/publications/fips/fips199/FIPS-PUB-199-final.pdf).

Once the potential impact on these three objectives is determined, the overall impact level of the system is determined based on the "high water mark" principle. This process is described in [NIST's FIPS 200 publication](http://csrc.nist.gov/publications/fips/fips200/FIPS-200-final-march.pdf).

Determining the impact levels is ultimately subjective; the AO makes the final determination.

## Categorize using the 3 security objectives

Go through each of the security objectives and determine the impact on the organization or individuals if the system is compromised. The framework we usually use is to ask ourselves (and the agency we are creating the system with) three worst case scenario questions:

- What is the worst possible outcome if all of the _confidentiality_ of the system is lost? i.e.
  - What if all of the data in the system is exposed to the public?
- What is the worst possible outcome if all of the _integrity_ of the system is lost? i.e.
  - What if an error makes it into the data?
  - What if an update to the data is lost?
- What is the worst possible outcome if all of the _availability_ of the system is lost? i.e.
  - What if the system has downtime?

If the potential impact is a _limited_ adverse effect on organizational operations, organizational assets, or individuals, we select "low". If the potential adverse impact is _serious_, we select "moderate". If the potential adverse impact is _severe or catastrophic_, we choose "high".

The answer to each question should then be interpreted in terms of impact to either the public or the government. The higher value for _either_ impacted party is be used.

## Considerations

The canonical or singular nature of a function being provided by the system must be taken into consideration in the categorization. The more singular and canonical the system under evaluation is, the higher the impact level.

For example, if we re-post data from weather.gov, it is less impactful for us to lose availability than it is for weather.gov itself. Conversely, GSA is the only source of FedBizOpps data - therefore our availability is much more important for that data and function, and we should select a higher impact level for `availability`.

If there is any authorization or authentication being done, it is _likely_ at the `moderate` level for all metrics.

Just because we need `availability: high`, doesn't mean it needs `confidentiality: high` or `integrity: high`. These determinations are important for later tailoring of system controls.

### PII

Privacy risk is partially assessed based on to the degree to which a program or information system collects and makes use of personally identifiable information (PII). Per [OMB Circular A-130](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf), PII is "information that can be used to distinguish or trace an individual's identity, either alone or when combined with other information that is linked or linkable to a specific individual."

Storing PII always raises the level to at least `moderate` for the `confidentiality` and `integrity` objectives.

## Selecting the overall impact level

Once you have decided on the impact level (`low`, `moderate`, `high`) for each of three objectives (`confidentiality`, `integrity`, and `availability`), you must then determine the overall impact level of the system. A _low impact system_ is one in which all three of the security objectives are `low`. A _moderate impact system_ is one in which at least one of the objectives is `moderate`, and none are `high`. A _high impact system_ is one in which at least one objective is `high`.

For more information, see [NIST 800-18](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf):

- [Table 1](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-18r1.pdf#page=27) for FIPS categorization
- [Section 3.13](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=31) for security controls

## Examples

- Low: [CALC](https://calc.gsa.gov)
- Moderate: [cloud.gov](https://cloud.gov), future-state of [fec.gov](https://fec.gov/).
- High: the future-state of [login.gov](https://login.gov)
