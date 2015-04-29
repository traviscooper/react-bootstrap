/* eslint no-path-concat: 0, no-var: 0 */

export default {
  ButtonTypes:                   require('fs').readFileSync(__dirname + '/../examples/ButtonTypes.js', 'utf8'),
  ButtonSizes:                   require('fs').readFileSync(__dirname + '/../examples/ButtonSizes.js', 'utf8'),
  ButtonBlock:                   require('fs').readFileSync(__dirname + '/../examples/ButtonBlock.js', 'utf8'),
  ButtonActive:                  require('fs').readFileSync(__dirname + '/../examples/ButtonActive.js', 'utf8'),
  ButtonDisabled:                require('fs').readFileSync(__dirname + '/../examples/ButtonDisabled.js', 'utf8'),
  ButtonTagTypes:                require('fs').readFileSync(__dirname + '/../examples/ButtonTagTypes.js', 'utf8'),
  ButtonLoading:                 require('fs').readFileSync(__dirname + '/../examples/ButtonLoading.js', 'utf8'),
  ButtonGroupBasic:              require('fs').readFileSync(__dirname + '/../examples/ButtonGroupBasic.js', 'utf8'),
  ButtonToolbarBasic:            require('fs').readFileSync(__dirname + '/../examples/ButtonToolbarBasic.js', 'utf8'),
  ButtonGroupSizes:              require('fs').readFileSync(__dirname + '/../examples/ButtonGroupSizes.js', 'utf8'),
  ButtonGroupNested:             require('fs').readFileSync(__dirname + '/../examples/ButtonGroupNested.js', 'utf8'),
  ButtonGroupVertical:           require('fs').readFileSync(__dirname + '/../examples/ButtonGroupVertical.js', 'utf8'),
  ButtonGroupJustified:          require('fs').readFileSync(__dirname + '/../examples/ButtonGroupJustified.js', 'utf8'),
  DropdownButtonBasic:           require('fs').readFileSync(__dirname + '/../examples/DropdownButtonBasic.js', 'utf8'),
  DropdownButtonRevisited:       require('fs').readFileSync(__dirname + '/../examples/DropdownButtonRevisited.js', 'utf8'),
  SplitButtonBasic:              require('fs').readFileSync(__dirname + '/../examples/SplitButtonBasic.js', 'utf8'),
  DropdownButtonSizes:           require('fs').readFileSync(__dirname + '/../examples/DropdownButtonSizes.js', 'utf8'),
  DropdownButtonNoCaret:         require('fs').readFileSync(__dirname + '/../examples/DropdownButtonNoCaret.js', 'utf8'),
  SplitButtonDropup:             require('fs').readFileSync(__dirname + '/../examples/SplitButtonDropup.js', 'utf8'),
  SplitButtonRight:              require('fs').readFileSync(__dirname + '/../examples/SplitButtonRight.js', 'utf8'),
  PanelBasic:                    require('fs').readFileSync(__dirname + '/../examples/PanelBasic.js', 'utf8'),
  PanelWithHeading:              require('fs').readFileSync(__dirname + '/../examples/PanelWithHeading.js', 'utf8'),
  PanelWithFooter:               require('fs').readFileSync(__dirname + '/../examples/PanelWithFooter.js', 'utf8'),
  PanelContextual:               require('fs').readFileSync(__dirname + '/../examples/PanelContextual.js', 'utf8'),
  PanelListGroupFill:            require('fs').readFileSync(__dirname + '/../examples/PanelListGroupFill.js', 'utf8'),
  PanelGroupControlled:          require('fs').readFileSync(__dirname + '/../examples/PanelGroupControlled.js', 'utf8'),
  PanelGroupUncontrolled:        require('fs').readFileSync(__dirname + '/../examples/PanelGroupUncontrolled.js', 'utf8'),
  PanelGroupAccordion:           require('fs').readFileSync(__dirname + '/../examples/PanelGroupAccordion.js', 'utf8'),
  CollapsibleParagraph:          require('fs').readFileSync(__dirname + '/../examples/CollapsibleParagraph.js', 'utf8'),
  ModalStatic:                   require('fs').readFileSync(__dirname + '/../examples/ModalStatic.js', 'utf8'),
  ModalTrigger:                  require('fs').readFileSync(__dirname + '/../examples/ModalTrigger.js', 'utf8'),
  ModalOverlayMixin:             require('fs').readFileSync(__dirname + '/../examples/ModalOverlayMixin.js', 'utf8'),
  ModalContained:                require('fs').readFileSync(__dirname + '/../examples/ModalContained.js', 'utf8'),
  TooltipBasic:                  require('fs').readFileSync(__dirname + '/../examples/TooltipBasic.js', 'utf8'),
  TooltipPositioned:             require('fs').readFileSync(__dirname + '/../examples/TooltipPositioned.js', 'utf8'),
  TooltipInCopy:                 require('fs').readFileSync(__dirname + '/../examples/TooltipInCopy.js', 'utf8'),
  PopoverBasic:                  require('fs').readFileSync(__dirname + '/../examples/PopoverBasic.js', 'utf8'),
  PopoverPositioned:             require('fs').readFileSync(__dirname + '/../examples/PopoverPositioned.js', 'utf8'),
  PopoverPositionedContained:    require('fs').readFileSync(__dirname + '/../examples/PopoverPositionedContained.js', 'utf8'),
  ProgressBarBasic:              require('fs').readFileSync(__dirname + '/../examples/ProgressBarBasic.js', 'utf8'),
  ProgressBarWithLabel:          require('fs').readFileSync(__dirname + '/../examples/ProgressBarWithLabel.js', 'utf8'),
  ProgressBarScreenreaderLabel:  require('fs').readFileSync(__dirname + '/../examples/ProgressBarScreenreaderLabel.js', 'utf8'),
  ProgressBarContextual:         require('fs').readFileSync(__dirname + '/../examples/ProgressBarContextual.js', 'utf8'),
  ProgressBarStriped:            require('fs').readFileSync(__dirname + '/../examples/ProgressBarStriped.js', 'utf8'),
  ProgressBarAnimated:           require('fs').readFileSync(__dirname + '/../examples/ProgressBarAnimated.js', 'utf8'),
  ProgressBarStacked:            require('fs').readFileSync(__dirname + '/../examples/ProgressBarStacked.js', 'utf8'),
  NavBasic:                      require('fs').readFileSync(__dirname + '/../examples/NavBasic.js', 'utf8'),
  NavDropdown:                   require('fs').readFileSync(__dirname + '/../examples/NavDropdown.js', 'utf8'),
  NavStacked:                    require('fs').readFileSync(__dirname + '/../examples/NavStacked.js', 'utf8'),
  NavJustified:                  require('fs').readFileSync(__dirname + '/../examples/NavJustified.js', 'utf8'),
  NavbarBasic:                   require('fs').readFileSync(__dirname + '/../examples/NavbarBasic.js', 'utf8'),
  NavbarBrand:                   require('fs').readFileSync(__dirname + '/../examples/NavbarBrand.js', 'utf8'),
  NavbarCollapsible:             require('fs').readFileSync(__dirname + '/../examples/NavbarCollapsible.js', 'utf8'),
  CollapsibleNav:                require('fs').readFileSync(__dirname + '/../examples/CollapsibleNav.js', 'utf8'),
  TabbedAreaUncontrolled:        require('fs').readFileSync(__dirname + '/../examples/TabbedAreaUncontrolled.js', 'utf8'),
  TabbedAreaControlled:          require('fs').readFileSync(__dirname + '/../examples/TabbedAreaControlled.js', 'utf8'),
  TabbedAreaNoAnimation:         require('fs').readFileSync(__dirname + '/../examples/TabbedAreaNoAnimation.js', 'utf8'),
  PagerDefault:                  require('fs').readFileSync(__dirname + '/../examples/PagerDefault.js', 'utf8'),
  PagerAligned:                  require('fs').readFileSync(__dirname + '/../examples/PagerAligned.js', 'utf8'),
  PagerDisabled:                 require('fs').readFileSync(__dirname + '/../examples/PagerDisabled.js', 'utf8'),
  AlertBasic:                    require('fs').readFileSync(__dirname + '/../examples/AlertBasic.js', 'utf8'),
  AlertDismissable:              require('fs').readFileSync(__dirname + '/../examples/AlertDismissable.js', 'utf8'),
  AlertAutoDismissable:          require('fs').readFileSync(__dirname + '/../examples/AlertAutoDismissable.js', 'utf8'),
  CarouselUncontrolled:          require('fs').readFileSync(__dirname + '/../examples/CarouselUncontrolled.js', 'utf8'),
  CarouselControlled:            require('fs').readFileSync(__dirname + '/../examples/CarouselControlled.js', 'utf8'),
  GridBasic:                     require('fs').readFileSync(__dirname + '/../examples/GridBasic.js', 'utf8'),
  ListGroupDefault:              require('fs').readFileSync(__dirname + '/../examples/ListGroupDefault.js', 'utf8'),
  ListGroupLinked:               require('fs').readFileSync(__dirname + '/../examples/ListGroupLinked.js', 'utf8'),
  ListGroupActive:               require('fs').readFileSync(__dirname + '/../examples/ListGroupActive.js', 'utf8'),
  ListGroupStyle:                require('fs').readFileSync(__dirname + '/../examples/ListGroupStyle.js', 'utf8'),
  ListGroupHeader:               require('fs').readFileSync(__dirname + '/../examples/ListGroupHeader.js', 'utf8'),
  Label:                         require('fs').readFileSync(__dirname + '/../examples/Label.js', 'utf8'),
  LabelVariations:               require('fs').readFileSync(__dirname + '/../examples/LabelVariations.js', 'utf8'),
  Badge:                         require('fs').readFileSync(__dirname + '/../examples/Badge.js', 'utf8'),
  Jumbotron:                     require('fs').readFileSync(__dirname + '/../examples/Jumbotron.js', 'utf8'),
  PageHeader:                    require('fs').readFileSync(__dirname + '/../examples/PageHeader.js', 'utf8'),
  Well:                          require('fs').readFileSync(__dirname + '/../examples/Well.js', 'utf8'),
  WellSizes:                     require('fs').readFileSync(__dirname + '/../examples/WellSizes.js', 'utf8'),
  Glyphicon:                     require('fs').readFileSync(__dirname + '/../examples/Glyphicon.js', 'utf8'),
  TableBasic:                    require('fs').readFileSync(__dirname + '/../examples/TableBasic.js', 'utf8'),
  TableResponsive:               require('fs').readFileSync(__dirname + '/../examples/TableResponsive.js', 'utf8'),
  Input:                         require('fs').readFileSync(__dirname + '/../examples/Input.js', 'utf8'),
  InputTypes:                    require('fs').readFileSync(__dirname + '/../examples/InputTypes.js', 'utf8'),
  InputAddons:                   require('fs').readFileSync(__dirname + '/../examples/InputAddons.js', 'utf8'),
  InputSizes:                    require('fs').readFileSync(__dirname + '/../examples/InputSizes.js', 'utf8'),
  InputValidation:               require('fs').readFileSync(__dirname + '/../examples/InputValidation.js', 'utf8'),
  InputHorizontal:               require('fs').readFileSync(__dirname + '/../examples/InputHorizontal.js', 'utf8'),
  InputWrapper:                  require('fs').readFileSync(__dirname + '/../examples/InputWrapper.js', 'utf8')
};
