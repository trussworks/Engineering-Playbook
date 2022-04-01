# [Terraform](README.md) / `terraform state mv` in Delicate Circumstances

Sometimes you have a preexisting resource that you'd like to replace with another version. That's why the `terraform state mv` command exists. The [Terraform documentation](https://www.terraform.io/docs/commands/state/mv.html) will give you an outline of the different circumstances in which you can use it (including when moving resource between state files).

## Steps

1. Add the new instance of the resource (or the module it lives in).
1. Run `terraform state mv` with the appropriate arguments.
1. Delete the initial instance.
1. Run `terraform plan` to ensure you don't have a remaining resource.

## Complications

Sometimes you will be wary about running state move because you aren't sure that your move makes sense (i.e. in the case of a clean plan but dirty apply). In that case, you can safeguard by first [pulling state locally](https://www.terraform.io/docs/commands/state/pull.html) and then moving. If your plan goes sideways, you can revert to the earlier state via [state push](https://www.terraform.io/docs/commands/state/push.html).

## Resources

- [Terraform state commands](https://www.terraform.io/docs/commands/state/index.html)
- [Terraform moving across across different state files](https://medium.com/@lynnlin827/moving-terraform-resources-states-from-one-remote-state-to-another-c76f8b76a996)
